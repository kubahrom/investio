import React, { useState } from 'react';
import Collapse from '../icons/Collapse';
import BanksGroup from './BanksGroup';

const ShowBanks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center font-semibold"
        aria-label={`${
          open ? 'Zavřít' : 'Otevřít'
        } filtr podle jednotlivých bank.`}
        onClick={() => setOpen((o) => !o)}
      >
        <span>Filtrovat podle banky</span>
        <Collapse open={open} />
      </button>
      <div className={`${open ? 'block' : 'hidden'}`}>
        <BanksGroup />
      </div>
    </div>
  );
};

export default ShowBanks;
