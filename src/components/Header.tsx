import { differenceInHours, formatDistance } from 'date-fns';
import { cs } from 'date-fns/locale';
import { useAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { savingsAccounts } from '../atoms/atoms';
import FilteredRowsLength from './Atoms/FilteredRowsLength';
import Container from './Container';
import AmountToInterest from './Inputs/AmountToInterest';
import Info from './icons/Info';

const Header = () => {
  const { data: session } = useSession();
  const [savingsAccountsData] = useAtom(savingsAccounts);
  const [savingsAccountData, setSavingsAccountsData] = useAtom(savingsAccounts);
  const { data, isFetching, refetch } = useQuery(
    ['savings-accounts'],
    async () => {
      return (await fetch('/api/get-savings-accounts')).json();
    },
    {
      enabled: false,
    }
  );

  const handleRefreshData = () => {
    refetch();
  };

  const getDateFromLastScape = useCallback(() => {
    if (!savingsAccountsData) return;
    const date = new Date(savingsAccountsData.scrapeDate);
    const distance = formatDistance(date, new Date(), { locale: cs });

    return distance;
  }, [savingsAccountsData]);

  const getDateFromLastUpdate = useCallback(() => {
    if (!savingsAccountsData) return;

    const lastCheck = savingsAccountsData.lastCheck;

    if (lastCheck !== 'Dnes') return lastCheck;

    const date = new Date(savingsAccountsData.scrapeDate).toLocaleDateString();

    return date;
  }, [savingsAccountsData]);

  const isDisabled = useCallback(() => {
    if (!savingsAccountsData) return;
    const date = new Date(savingsAccountsData.scrapeDate);
    const hours = differenceInHours(new Date(), date);

    return hours < 2;
  }, [savingsAccountsData]);

  useEffect(() => {
    if (!data) return;
    if (data === savingsAccountData) return;

    setSavingsAccountsData(data);
  }, [data, setSavingsAccountsData, savingsAccountData]);

  return (
    <Container>
      <h1 className="text-2xl font-bold text-neutral md:text-3xl lg:text-4xl">
        Spořicí účty - srovnání
      </h1>
      <div className="pt-2 lg:flex">
        <div className="md:w-96">
          <AmountToInterest />
          <p className="py-1 text-lg text-neutral md:text-xl">
            Výpovědní lhůta: <span className="font-medium">bez výpovědi</span>
          </p>
          <p className="py-1 text-lg text-neutral md:text-xl">
            Počet spořicích účtů: <FilteredRowsLength />
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="py-1 text-lg text-neutral md:text-xl">
              Aktualizace dat:{' '}
              <span className="font-medium">{getDateFromLastUpdate()}</span>
            </p>
            <div
              className="tooltip tooltip-right tooltip-primary ml-2 hidden text-primary md:block"
              data-tip="Poslední datum, kdy redakce z webu Měšec.cz manuálně aktualizovala data."
            >
              <Info />
            </div>
          </div>
          <div className="flex items-center">
            <p className="py-1 text-lg text-neutral md:text-xl">
              Stáří dat:{' '}
              <span className="font-medium">{getDateFromLastScape()}</span>
            </p>
            <div
              className="tooltip tooltip-right tooltip-primary ml-2 hidden text-primary md:block"
              data-tip="Stáří dat se určuje podle toho, kdy byly data získány z webu Měšec.cz."
            >
              <Info />
            </div>
          </div>
          {session && (
            <div>
              <div
                className={`text-left ${
                  isDisabled() &&
                  'md:tooltip md:tooltip-right md:tooltip-primary'
                } `}
                data-tip="Data lze obnovit pokud jsou data starší než 2 hodiny."
              >
                <button
                  className={`btn btn-primary btn-sm mt-2 flex-nowrap gap-0 text-white focus:bg-primary ${
                    isFetching && 'loading'
                  } ${isDisabled() && 'btn-disabled'}`}
                  onClick={handleRefreshData}
                  disabled={isDisabled()}
                >
                  Obnovit data
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
