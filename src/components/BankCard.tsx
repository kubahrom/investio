import React from 'react';
import { SavingsAccountType } from '../types/savingsAccountsTypes';
import BankLogo from './BankLogo';

type Props = {
  data: SavingsAccountType;
};

// TODO: dynamic interestRateAfterTax calculation, dynamic max value for amount input
const BankCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-xl border-l-4 border-primary bg-base-100 p-2 shadow-md md:border-l-8 md:p-4">
      <div className="flex">
        <div className="mr-2 w-14 flex-shrink-0 place-self-center xs:w-16 md:mr-4 md:w-28 lg:mr-8 lg:w-32">
          <BankLogo bank={data.name} />
        </div>
        <div className="w-full">
          <p className="text-sm font-medium text-info-content md:text-base">
            {data.name}
          </p>
          <p className="text-md font-bold text-primary md:text-2xl">
            {data.type}
          </p>
          <p className="text-sm text-neutral  md:pt-2 md:text-base">
            Připisování úroků:{' '}
            <span className="block font-medium xs:inline">
              {data.interestRateFreq}
            </span>
          </p>
          <p className="text-sm text-neutral md:text-base">
            Maximální výše vkladu:{' '}
            <span className="block font-medium md:inline">400 000,00 Kč</span>
          </p>
          <div className="hidden md:block">
            <p className="text-1xl font-medium text-neutral">
              Přehled úrokových sazeb
            </p>
            {data.table.map((row, index) => (
              <div key={index} className="flex gap-8">
                <span className="w-11">{row.value}</span>
                <span>{row.range}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-2 flex-shrink-0 place-self-center text-right  md:px-6">
          <p className="text-3xl font-bold text-neutral md:text-5xl lg:text-6xl">
            {data.interestRate}
          </p>
          <p className="pt-2 text-sm text-info-content xs:text-lg md:text-2xl">
            {data.interestAfterTax}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
