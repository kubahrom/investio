import React from 'react';
import { RowValueType } from '../types/investmentTypes';
import BankLogo from './BankLogo';

type Props = {
  data: RowValueType;
};

const BankCard: React.FC<Props> = ({ data }) => {
  return (
    // <div className="card bg-base-100 border-l-8 border-primary rounded-xl shadow-md w-[50em]">
    <div className="bg-base-100 border-l-4 md:border-l-8 border-primary rounded-xl shadow-md p-2 md:p-4 lg:w-[50em]">
      <div className="flex">
        <div className="flex-shrink-0 w-14 xs:w-16 md:w-28 lg:w-32 mr-2 md:mr-4 lg:mr-8 place-self-center">
          <BankLogo bank={data.bank.name} />
        </div>
        <div className="w-full">
          <p className="text-sm md:text-base font-medium text-info-content">
            {data.bank.name}
          </p>
          <p className="text-md md:text-2xl font-bold text-primary">
            {data.bank.type}
          </p>
          <p className="text-sm md:text-base  text-neutral md:py-1">
            Maximální výše vkladu:{' '}
            <span className="font-medium block md:inline">400 000,00 Kč</span>
          </p>
          <div className="hidden md:block">
            <p className="text-1xl font-medium text-neutral">
              Přehled úrokových sazeb
            </p>
            <div className="flex gap-8">
              <span className="">4,58 %</span>
              <span className="">0 - 400 000</span>
            </div>
            <div className="flex gap-8">
              <span className="">4,08 %</span>
              <span>400 001 - neomezeno</span>
            </div>
          </div>
        </div>
        <div className="md:px-6 flex-shrink-0 text-right ml-2  place-self-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral">
            {data.interestRate}
          </p>
          <p className="text-sm xs:text-lg md:text-2xl text-info-content pt-2">
            {data.interestAfterTax}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
