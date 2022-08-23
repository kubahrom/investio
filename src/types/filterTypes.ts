export type OrderType = 'interestRate' | 'interestAfterTax';

export type FilterValuesType = {
  search: string;
  order: OrderType;
  filterByName: string[];
};
