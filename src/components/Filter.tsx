import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import useDebounce from '../hooks/useDebounce';
import { OrderType } from '../types/filterTypes';

import { filterValues } from './atoms/atoms';
import Order from './Inputs/Order';
import Search from './Inputs/Search';
import ShowBanks from './Inputs/ShowBanks';

type FormData = {
  search: string;
  order: OrderType;
  filterByName: string[];
};

const schema = z.object({
  search: z.string(),
  order: z.enum(['interestRate', 'interestAfterTax']),
  filterByName: z.array(z.string()),
});

const Filter = () => {
  const [filterValue, setFilterValue] = useAtom(filterValues);
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      search: filterValue.search,
      order: filterValue.order,
      filterByName: filterValue.filterByName,
    },
  });

  const watchFilter = methods.watch();
  const debouncedValue = useDebounce(watchFilter.search, 300);

  useEffect(() => {
    setFilterValue((prev) => ({ ...prev, search: debouncedValue }));
  }, [debouncedValue, setFilterValue]);

  useEffect(() => {
    setFilterValue((prev) => ({ ...prev, order: watchFilter.order }));
  }, [watchFilter.order, setFilterValue]);

  useEffect(() => {
    setFilterValue((prev) => ({
      ...prev,
      filterByName: watchFilter.filterByName,
    }));
  }, [watchFilter.filterByName, setFilterValue]);

  return (
    <div
      className="grid gap-2 rounded-xl border-l-4 border-primary
                 bg-base-100 p-2 shadow-md md:gap-4 md:border-l-8 md:p-4 xl:border-r-8
                 xl:border-l-0"
    >
      <FormProvider {...methods}>
        <Search />
        <Order />
        <ShowBanks />
      </FormProvider>
    </div>
  );
};

export default Filter;
