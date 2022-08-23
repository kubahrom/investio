import { atom } from 'jotai';
import { FilterValuesType } from '../../types/filterTypes';

export const amountToInterest = atom(50000);

export const filterValues = atom<FilterValuesType>({
  search: '',
  order: 'interestAfterTax',
  filterByName: [
    'Česká spořitelna',
    'ČSOB',
    'Komerční banka',
    'Raiffeisenbank',
    'UniCredit Bank',
    'Air Bank',
    'Moneta',
    'Fio banka',
    'mBank',
    'Ostatní',
  ],
});
