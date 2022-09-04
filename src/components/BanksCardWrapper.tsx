import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { SavingsAccountType } from '../types/savingsAccountsTypes';
import { calculateInterest } from '../util/calculateInterest';

import { filterValues, amountToInterest } from './atoms/atoms';
import BankCard from './BankCard';

type Props = {
  data: Array<SavingsAccountType>;
};

const BanksCardWrapper: React.FC<Props> = ({ data }) => {
  const [rows, setRows] = useState(data.slice(0, 7));
  const [filterValue] = useAtom(filterValues);
  const [amount] = useAtom(amountToInterest);

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

    let calculatedData: Array<SavingsAccountType> = [];

    if (amount === 50000) {
      calculatedData = searchedData;
    } else {
      calculatedData = searchedData;
      calculatedData = searchedData.map((row) => ({
        ...row,
        interestAfterTax: calculateInterest(
          amount,
          row.interestRateFreq,
          row.table,
          row.rangeInterest
        ),
      }));
    }

    // TODO: Sort data
    setFilteredRows(calculatedData);
  }, [filterValue, data, amount]);

  // console.log(new Set(data.map((item) => item.interestRateFreq)));

  return (
    <div className="grid gap-4  md:gap-8   lg:w-[50em] xl:flex-shrink-0">
      {filteredRows.map((row, index) => (
        <BankCard data={row} key={index} />
      ))}
      <button className="btn btn-primary m-auto" onClick={() => setRows(data)}>
        Zobrazit všechny
      </button>
    </div>
  );
};

export default BanksCardWrapper;
