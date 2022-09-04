import { SavingsAccountTableType } from '../types/savingsAccountsTypes';
import { numberToCurrency } from './numberToCurrency';

const TAX_RATE = 0.15;

const getFrequency = (freq: string) => {
  switch (freq) {
    case 'měsíčně':
      return 12;
    case 'čtvrtletně':
      return 4;
    case 'pololetně':
      return 2;
    case 'denně':
      return 365;
    default:
      return 1;
  }
};

const withRangeInterest = (
  amount: number,
  freq: number,
  table: SavingsAccountTableType
) => {
  let currentAmount = amount;
  let previousMax = 0;

  for (let i = 0; i < freq; i++) {
    let amountLeft = currentAmount;
    for (const { to, value } of table) {
      if (!amountLeft) break;
      const fixedTo = to ? to : 999999999999;

      if (amountLeft <= fixedTo) {
        currentAmount += ((amountLeft * (value / 100)) / freq) * (1 - TAX_RATE);
        amountLeft = 0;
        previousMax = 0;
      } else {
        const range = fixedTo - previousMax;
        amountLeft -= range;
        previousMax = fixedTo;
        currentAmount += ((range * (value / 100)) / freq) * (1 - TAX_RATE);
      }
    }
  }
  return numberToCurrency(currentAmount - amount);
};

const withoutRangeInterest = (
  amount: number,
  freq: number,
  table: SavingsAccountTableType
) => {
  let currentAmount = amount;
  for (let i = 0; i < freq; i++) {
    let maxRange: SavingsAccountTableType = [];
    for (let i = 0; i < table.length; i++) {
      if (amount <= table[i].to && amount >= table[i].from) {
        maxRange.push(table[i]);
      } else if (
        table[i].value !== 0 &&
        table[i].to === 0 &&
        amount >= table[i].from
      ) {
        maxRange.push(table[i]);
      }
    }

    if (maxRange.length === 0) break;

    currentAmount +=
      ((currentAmount * (maxRange[maxRange.length - 1].value / 100)) / freq) *
      (1 - TAX_RATE);
  }
  return numberToCurrency(currentAmount - amount);
};

export const calculateInterest = (
  amount: number,
  frequencyOfInterest: string,
  table: SavingsAccountTableType,
  rangeInterest: string
) => {
  let freq = getFrequency(frequencyOfInterest);
  if (rangeInterest === 'ano') {
    return withRangeInterest(amount, freq, table);
  } else {
    return withoutRangeInterest(amount, freq, table);
  }
};
