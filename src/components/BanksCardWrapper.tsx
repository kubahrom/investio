import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { SavingsAccountType } from '../types/savingsAccountsTypes';
import { calculateInterest } from '../util/calculateInterest';

import {
  filterValues,
  amountToInterest,
  filteredValuesLength,
} from '../atoms/atoms';
import BankCard from './BankCard';

type Props = {
  data: Array<SavingsAccountType>;
};

const BanksCardWrapper: React.FC<Props> = ({ data }) => {
  const [filterValue] = useAtom(filterValues);
  const [amount] = useAtom(amountToInterest);
  const [showAll, setShowAll] = useState(false);
  const [_, setRowsLength] = useAtom(filteredValuesLength);

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

    const sortedData = calculatedData.sort((a, b) => {
      if (filterValue.order === 'interestAfterTax') {
        return a.interestAfterTax < b.interestAfterTax ? 1 : -1;
      } else {
        const aMaxInterestRate = Math.max(...a.table.map((row) => row.value));
        const bMaxInterestRate = Math.max(...b.table.map((row) => row.value));
        return aMaxInterestRate < bMaxInterestRate ? 1 : -1;
      }
    });

    setRowsLength(sortedData.length);

    if (showAll) {
      setFilteredRows(sortedData);
    } else {
      setFilteredRows(sortedData.slice(0, 5));
    }
  }, [filterValue, data, amount, showAll, setRowsLength]);

  // console.log(new Set(data.map((item) => item.interestRateFreq)));

  return (
    <div>
      <div className="grid gap-4  md:gap-8   lg:w-[50em] xl:flex-shrink-0">
        {filteredRows.map((row, index) => (
          <BankCard data={row} key={index} />
        ))}
        <button
          className="btn btn-primary m-auto"
          aria-label={
            showAll
              ? 'Zobrazit pouze nejlepší nabídky'
              : 'Zobrazit všechny nabídky'
          }
          onClick={() => setShowAll((p) => !p)}
        >
          {showAll ? 'Pouze nejlepší nabídky' : 'Zobrazit všechny'}
        </button>
      </div>
    </div>
  );
};

export default BanksCardWrapper;
