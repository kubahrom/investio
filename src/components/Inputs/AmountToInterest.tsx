import React, { useMemo, useState } from 'react';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { amountToInterest } from '../atoms/atoms';
import Edit from '../icons/Edit';

type FormData = {
  amount: number;
};

const schema = z.object({
  amount: z.number().nonnegative(),
});

const AmountToInterest = () => {
  const [amount, setAmount] = useAtom(amountToInterest);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      amount,
    },
  });

  const valueIntl = useMemo(() => {
    return new Intl.NumberFormat('cs-CZ').format(amount);
  }, [amount]);

  const onSubmit = handleSubmit((data) => {
    setAmount(data.amount);
    setEdit(false);
  });

  return (
    <span className="flex items-center py-1 text-lg text-neutral md:text-xl">
      <p className="pr-1">Částka k úročení:</p>
      {edit ? (
        <form onSubmit={onSubmit}>
          <input
            type="number"
            autoFocus
            placeholder="Zadejte částku"
            id="interest-rate-value"
            className={`input ${
              errors.amount ? 'input-error' : 'input-primary'
            } input-sm ml-2 max-w-[7.5rem]`}
            {...register('amount', { valueAsNumber: true })}
            min={0}
            step={0.01}
          />
          <button type="submit" className="btn btn-primary btn-sm ml-2">
            Ok
          </button>
        </form>
      ) : (
        <>
          <span className="font-medium">{valueIntl} Kč</span>
          <button
            className="edit btn btn-primary btn-sm ml-2 after:normal-case after:text-primary 
                     after:content-['Upravit'] hover:text-primary-content hover:after:text-primary-content"
            onClick={() => setEdit(true)}
          >
            <Edit />
          </button>
        </>
      )}
    </span>
  );
};

export default AmountToInterest;
