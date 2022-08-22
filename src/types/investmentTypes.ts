export type APISavingsAccountType = {
  id: string;
  list: SavingsAccountType[];
  scrapeDate: string;
  lastCheck: string;
};

export type SavingsAccountType = {
  name: string;
  type: string;
  interestRate: string;
  interestAfterTax: string;
  table: SavingsAccountTableType;
  interestRateFreq: string;
  // note: string;
};

export type SavingsAccountTableType = {
  range: string;
  value: string;
}[];
