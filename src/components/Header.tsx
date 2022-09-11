import React from 'react';
import FilteredRowsLength from './Atoms/FilteredRowsLength';
import Container from './Container';
import AmountToInterest from './Inputs/AmountToInterest';

const Header = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold text-neutral md:text-3xl lg:text-4xl">
        Spořicí účty - srovnání
      </h1>
      <div className="pt-2">
        <AmountToInterest />
        <p className="py-1 text-lg text-neutral md:text-xl">
          Výpovědní lhůta: <span className="font-medium">Bez výpovědi</span>
        </p>
        <p className="py-1 text-lg text-neutral md:text-xl">
          Počet spořicích účtů: <FilteredRowsLength />
        </p>
      </div>
    </Container>
  );
};

export default Header;
