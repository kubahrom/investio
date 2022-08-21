import React, { useMemo, useState } from 'react';
import Container from './Container';
import Edit from './icons/Edit';

const Header = () => {
  const [value, setValue] = useState(50000);
  const [edit, setEdit] = useState(false);

  const valueIntl = useMemo(() => {
    return new Intl.NumberFormat('cs-CZ').format(value);
  }, [value]);

  return (
    <Container>
      <h1 className="text-2xl font-bold text-neutral md:text-3xl lg:text-4xl">
        Spořící účty - srovnání
      </h1>
      <div className="pt-2">
        <p className="flex items-center py-1 text-lg text-neutral md:text-xl">
          <span className="pr-1">Částka k úročení:</span>
          {edit ? (
            <input
              type="text"
              placeholder="Zadejte částku"
              className="input input-ghost max-w-xs"
            />
          ) : (
            <>
              <span className="font-medium">{valueIntl} Kč</span>
              <button
                className="edit btn btn-primary btn-sm ml-1 border-primary-content bg-primary-content text-primary after:normal-case after:text-primary-content after:content-['Upravit'] hover:text-primary-content hover:after:text-primary-content"
                onClick={() => setEdit((e) => !e)}
              >
                <Edit />
              </button>
            </>
          )}
        </p>
        <p className="py-1 text-lg text-neutral md:text-xl">
          Výpovědní lhůta: <span className="font-medium">Bez výpovědi</span>
        </p>
      </div>
    </Container>
  );
};

export default Header;
