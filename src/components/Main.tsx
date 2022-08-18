import React from 'react';

import Container from './Container';
import { SavingsAccountType } from '../types/investmentTypes';
import BankCard from './BankCard';

type Props = {
  data: Array<SavingsAccountType>;
};

const Main: React.FC<Props> = ({ data }) => {
  return (
    <main>
      <Container>
        <div className="grid gap-4 py-4 md:gap-8 md:py-8">
          {data.map((row, index) => (
            <BankCard data={row} key={index} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Main;
