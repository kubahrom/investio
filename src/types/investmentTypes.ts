export type RowBankType = {
  name: string;
  type: string;
  link: string;
};

export type RowValueType = {
  bank: RowBankType;
  initialValue: string;
  interestRate: string;
  card: string;
  interestAfterTax: string;
};

export type APIInvestmentType = {
  tableValues: RowValueType[];
};

// Temporary types

export type SavingsAccountType = {
  name: string;
  type: string;
  interestRate: string;
  interestAfterTax: string;
  table: SavingsAccountTableType;
};

export type SavingsAccountTableType = {
  range: string;
  value: string;
}[];
