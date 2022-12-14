import { atom } from 'jotai';
import { FilterValuesType } from '../types/filterTypes';
import { APISavingsAccountType } from '../types/savingsAccountsTypes';

export const amountToInterest = atom(50000);

export const filterValues = atom<FilterValuesType>({
  search: '',
  order: 'interestAfterTax',
  filterByName: [],
});

export const filteredValuesLength = atom(0);

export const savingsAccounts = atom<APISavingsAccountType | null>(null);
