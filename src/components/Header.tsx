import React from 'react';
import Container from './Container';

const Header = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold text-neutral md:text-3xl lg:text-4xl">
        Spořící účty - srovnání
      </h1>
      <div className="pt-2">
        <p className="py-1 text-lg text-neutral md:text-xl">
          Průměrný zůstatek: <span className="font-medium">50 000,00 Kč</span>
        </p>
        <p className="py-1 text-lg text-neutral md:text-xl">
          Výpovědní lhůta: <span className="font-medium">Bez výpovědi</span>
        </p>
      </div>
    </Container>
  );
};

export default Header;
