export type APISavingsAccountType = {
  id: string;
  list: SavingsAccountType[];
  scrapeDate: string;
};

export type SavingsAccountType = {
  name: string;
  type: string;
  interestRate: string;
  interestAfterTax: string;
  table: SavingsAccountTableType;
  note: string;
};

export type SavingsAccountTableType = {
  range: string;
  value: string;
}[];

// FIXME: delete after cleanup APIs

type RowBankType = {
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
