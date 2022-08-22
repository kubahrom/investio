import { atom } from 'jotai';
import { FilterValuesType } from '../../types/filterTypes';

export const amountToInterest = atom(50000);

export const filterValues = atom<FilterValuesType>({
  search: '',
  order: 'interestAfterTax',
  filterByName: ['mBank', 'Ostatní'],
});
