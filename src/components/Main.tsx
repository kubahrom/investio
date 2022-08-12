import React from 'react';

import Container from './Container';
import { RowValueType } from '../types/investmentTypes';
import BankCard from './BankCard';

type Props = {
  data: Array<RowValueType>;
};

const Main: React.FC<Props> = ({ data }) => {
  return (
    <main>
      <Container>
        <div className="py-4 md:py-8">
          {data.map((row, index) => (
            <BankCard data={row} key={index} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Main;
