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

// Amount       2 000 000
// Freq         monthly 12
// Table        [         n                    n                    %
//                 {from: 0,            to: 200 000,        value: 4.5 },
//                 {from: 200 001,      to: 1 000 000,      value: 0.1}
//                 {from: 1 000 001,    to: 10 000 000,     value: 0.15}
//                 {from: 10 000 001,   to: neomezeno,      value: 0.2}
//              ]

// Should be 9 610,61

export const calculateInterest = (
  amount: number,
  frequencyOfInterest: string,
  table: SavingsAccountTableType
) => {
  let freq = getFrequency(frequencyOfInterest);
  let currentAmount = amount;

  for (let i = 0; i < freq; i++) {
    let amountLeft = currentAmount;

    for (const { to, value } of table) {
      const fixedTo = to ? to : 999999999999;

      if (amountLeft <= fixedTo) {
        if (!amountLeft) break;

        currentAmount += ((amountLeft * (value / 100)) / freq) * (1 - TAX_RATE);
        amountLeft = 0;
      } else {
        if (!amountLeft) break;

        if (amountLeft - fixedTo >= 0) {
          amountLeft -= fixedTo;
          currentAmount += ((fixedTo * (value / 100)) / freq) * (1 - TAX_RATE);
        } else {
          currentAmount +=
            ((amountLeft * (value / 100)) / freq) * (1 - TAX_RATE);
          amountLeft = 0;
        }
      }
    }
  }

  return (currentAmount - amount).toFixed(2);
};
