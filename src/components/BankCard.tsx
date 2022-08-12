import React from 'react';
import { RowValueType } from '../types/investmentTypes';
import BankLogo from './BankLogo';

type Props = {
  data: RowValueType;
};

const BankCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="card bg-base-100 border-l-8 border-primary rounded-xl shadow-md w-[50em]">
      <div className="card-body">
        <div className="flex gap-8">
          <div className="flex-shrink-0 w-36">
            <BankLogo />
          </div>
          <div>
            <p className="text-1xl font-medium text-neutral">
              {data.bank.name}
            </p>
            <p className="text-2xl font-bold text-primary">{data.bank.type}</p>
            <p className="text-md  text-neutral py-2">
              Maximální výše vkladu:{' '}
              <span className="font-medium">400 000,00 Kč</span>
            </p>
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
          <div className="px-6 flex-shrink-0">
            <p className="text-6xl font-bold text-neutral">
              {data.interestRate}
            </p>
            <p className="text-right text-2xl text-neutral pt-2">
              {data.interestAfterTax}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
