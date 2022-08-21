import React from 'react';
import Order from './Inputs/Order';
import Search from './Inputs/Search';
import ShowBanks from './Inputs/ShowBanks';

const Filter = () => {
  return (
    <div
      className="grid gap-2 rounded-xl border-l-4 border-primary
                 bg-base-100 p-2 shadow-md md:gap-4 md:border-l-8 md:p-4 xl:border-r-8
                 xl:border-l-0"
    >
      <Search />
      <Order />
      <ShowBanks />
    </div>
  );
};

export default Filter;
