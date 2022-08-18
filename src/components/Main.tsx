import React, { useState } from 'react';

import Container from './Container';
import { SavingsAccountType } from '../types/investmentTypes';
import BankCard from './BankCard';

type Props = {
  data: Array<SavingsAccountType>;
};

const Main: React.FC<Props> = ({ data }) => {
  const [rows, setRows] = useState(data.slice(0, 5));

  return (
    <main>
      <Container>
        <div className="grid gap-4 py-4 md:gap-8 md:py-8 lg:w-[50em]">
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
      </Container>
    </main>
  );
};

export default Main;
