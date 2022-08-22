import React, { useState } from 'react';

import Container from './Container';
import BankCard from './BankCard';
import Filter from './Filter';
import { SavingsAccountType } from '../types/savingsAccountsTypes';

type Props = {
  data: Array<SavingsAccountType>;
};

const Main: React.FC<Props> = ({ data }) => {
  const [rows, setRows] = useState(data.slice(0, 2));

  // console.log(new Set(data.map((item) => item.interestRateFreq)));
  return (
    <main>
      <Container>
        <div className="py-4 md:py-8 xl:flex xl:w-auto xl:flex-row-reverse">
          <div className="mb-4 w-full md:mb-8 lg:w-[50em] lg:flex-grow xl:mb-0 xl:ml-8 xl:w-auto">
            <Filter />
          </div>
          <div className="grid gap-4  md:gap-8   lg:w-[50em] xl:flex-shrink-0">
            {rows.map((row, index) => (
              <BankCard data={row} key={index} />
            ))}
            <button
              className="btn btn-primary m-auto"
              onClick={() => setRows(data)}
            >
              Zobrazit všechny
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Main;
