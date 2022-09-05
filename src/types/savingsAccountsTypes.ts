export type APISavingsAccountType = {
  id: string;
  list: SavingsAccountType[];
  scrapeDate: string;
  lastCheck: string;
};

export type SavingsAccountType = {
  name: string;
  tag: string;
  type: string;
  interestAfterTax: number;
  table: SavingsAccountTableType;
  interestRateFreq: string;
  // note: string;
  rangeInterest: string;
};

export type SavingsAccountTableType = {
  from: number;
  to: number;
  value: number;
}[];
