import { SavingsAccountTableType } from '../types/savingsAccountsTypes';

const TAX_RATE = 0.15;

const getFrequency = (freq: string) => {
  switch (freq) {
    case 'měsíčně':
      return 12;
    case 'čvrtletně':
      return 4;
    case 'pololetně':
      return 2;
    case 'denně':
      return 365;
    default:
      return 1;
  }
};

// FIXME: Update calculation after add range interest boolean

export const calculateInterest = (
  amount: number,
  frequencyOfInterest: string,
  table: SavingsAccountTableType
) => {
  let freq = getFrequency(frequencyOfInterest);
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

  return (currentAmount - amount).toFixed(2);
};
