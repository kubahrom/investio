import React from 'react';

import Container from './Container';
import { SavingsAccountType } from '../types/savingsAccountsTypes';
import Filter from './Filter';
import BanksCardWrapper from './BanksCardWrapper';

type Props = {
  data: Array<SavingsAccountType>;
};

const Main: React.FC<Props> = ({ data }) => {
  return (
    <main>
      <Container>
        <div className="py-4 md:py-8 xl:flex xl:w-auto xl:flex-row-reverse">
          <div className="mb-4 w-full md:mb-8 lg:w-[50em] lg:flex-grow xl:mb-0 xl:ml-8 xl:w-auto">
            <Filter />
          </div>
          <BanksCardWrapper data={data} />
        </div>
      </Container>
    </main>
  );
};

export default Main;
