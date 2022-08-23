import { SavingsAccountTableType } from '../types/savingsAccountsTypes';

export const calculateInterest = (
  amount: number,
  interestRate: number,
  freq: string,
  table: SavingsAccountTableType
) => {
  // Amount       50 000
  // Interest rate  5,5 %
  // Freq         měsíčně
  // Table        [
  //                 {from: 0, to: 100000, value: 5.5 %},
  //                 {from: 100000, to: 1000000, value: 0 %}
  //              ]

  //   console.log(amount, interestRate, freq, table);
  return amount;
};
