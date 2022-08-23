import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { SavingsAccountType } from '../types/savingsAccountsTypes';
import { calculateInterest } from '../util/calculateInterest';

import { filterValues } from './atoms/atoms';
import BankCard from './BankCard';

type Props = {
  data: Array<SavingsAccountType>;
};

const BanksCardWrapper: React.FC<Props> = ({ data }) => {
  const [rows, setRows] = useState(data.slice(0, 1));
  const [filterValue, _] = useAtom(filterValues);

  const [filteredRows, setFilteredRows] = useState<Array<SavingsAccountType>>(
    []
  );

  useEffect(() => {
    const filteredData = data.filter((row) =>
      filterValue.filterByName.includes(row.tag)
    );

    const searchedData = filteredData.filter(
      (row) =>
        row.name.toLowerCase().includes(filterValue.search.toLowerCase()) ||
        row.type.toLowerCase().includes(filterValue.search.toLowerCase())
    );
    // TODO: calculate interest after tax data
    // TODO: Sort data
    setFilteredRows(searchedData);
  }, [filterValue, data]);

  // console.log(new Set(data.map((item) => item.interestRateFreq)));
  // FIXME: add atom for amount
  // const test = calculateInterest(
  //   50000,
  //   rows[0].table[0].value,
  //   rows[0].interestRateFreq,
  //   rows[0].table
  // );

  return (
    <div className="grid gap-4  md:gap-8   lg:w-[50em] xl:flex-shrink-0">
      {rows.map((row, index) => (
        <BankCard data={row} key={index} />
      ))}
      <button className="btn btn-primary m-auto" onClick={() => setRows(data)}>
        Zobrazit všechny
      </button>
    </div>
  );
};

export default BanksCardWrapper;
