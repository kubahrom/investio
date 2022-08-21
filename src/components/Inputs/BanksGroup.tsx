import React from 'react';

const banks = [
  'Česká spořitelna',
  'ČSOB',
  'Komerční banka',
  'Raiffeisenbank',
  'UniCredit Bank',
  'Air Bank',
  'Moneta',
  'mBank',
  'Fio banka',
  'Ostatní',
];

const BanksGroup = () => {
  return (
    <div className="flex flex-row flex-wrap pt-2 xl:grid 2xl:grid-cols-2 2xl:gap-x-6">
      {banks.map((bank) => (
        <label className="label cursor-pointer" key={bank}>
          <span className="label-text">{bank}</span>
          <input
            type="checkbox"
            name="show-banks"
            className="checkbox checkbox-primary mx-2"
          />
        </label>
      ))}
    </div>
  );
};

export default BanksGroup;
