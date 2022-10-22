import React from 'react';

import Container from './Container';
import { SavingsAccountType } from '../types/savingsAccountsTypes';
import Filter from './Filter';
import BanksCardWrapper from './BanksCardWrapper';

type Props = {
  data: Array<SavingsAccountType> | undefined;
};

const Main: React.FC<Props> = ({ data }) => {
  return (
    <main>
      <Container>
        {data ? (
          <div className="py-4 md:py-8 xl:flex xl:w-auto xl:flex-row-reverse">
            <div className="mb-4 w-full md:mb-8 lg:w-[50em] lg:flex-grow xl:mb-0 xl:ml-8 xl:w-auto">
              <Filter />
            </div>
            <BanksCardWrapper data={data} />
          </div>
        ) : (
          <div className="py-4 md:py-8">
            <h2 className="text-xl font-bold text-neutral md:text-2xl">
              Omlouváme se, ale žádný spořicí účet nenalezen.
            </h2>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Main;
