import {
  ClientSafeProvider,
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import Container from './Container';
import { useAtom } from 'jotai';
import { savingsAccounts } from '../atoms/atoms';
import { useEffect } from 'react';

type NavbarProps = {
  provider: ClientSafeProvider | undefined;
};

const Navbar = ({ provider }: NavbarProps) => {
  const { data: session } = useSession();
  return (
    <Container>
      <div className="navbar mb-4 flex items-center bg-base-100 px-0 pt-4 md:mb-6 md:pt-6 lg:mb-10">
        <div className="flex-1">
          <p className="text-2xl font-medium text-primary md:text-3xl">
            Invest<span className="text-neutral">IO</span>
          </p>
        </div>
        {!session ? (
          <div className="flex-none gap-2">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => signIn(provider?.id)}
            >
              Přihlásit se
            </button>
          </div>
        ) : (
          <div className="gap-2 sm:flex-1">
            <ul className="menu menu-horizontal mr-auto p-0"></ul>
            <p className="hidden font-semibold md:block">
              {session.user?.name}
            </p>
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="avatar btn btn-ghost btn-circle">
                <div className="w-10 rounded-full">
                  <Image
                    src={session.user?.image || ''}
                    width="80"
                    height="80"
                    alt="avatar image"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <button onClick={() => signOut()}>Odhlásit se</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
