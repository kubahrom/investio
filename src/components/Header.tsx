import React from 'react';
import Container from './Container';

const Header = () => {
  return (
    <Container>
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Spořící účty - srovnání
      </h1>
      <div className="pt-2">
        <p className="text-xl py-1">
          Průměrný zůstatek: <span className="font-medium">50 000,00 Kč</span>
        </p>
        <p className="text-xl py-1">
          Výpovědní lhůta: <span className="font-medium">Bez výpovědi</span>
        </p>
      </div>
    </Container>
  );
};

export default Header;
