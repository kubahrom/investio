import React from 'react';
import Container from './Container';

const Header = () => {
  return (
    <Container>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral">
        Spořící účty - srovnání
      </h1>
      <div className="pt-2">
        <p className="text-lg md:text-xl py-1 text-neutral">
          Průměrný zůstatek: <span className="font-medium">50 000,00 Kč</span>
        </p>
        <p className="text-lg md:text-xl py-1 text-neutral">
          Výpovědní lhůta: <span className="font-medium">Bez výpovědi</span>
        </p>
      </div>
    </Container>
  );
};

export default Header;
