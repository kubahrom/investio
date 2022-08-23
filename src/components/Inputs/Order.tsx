import React from 'react';
import { useFormContext } from 'react-hook-form';

const Order = () => {
  const { register } = useFormContext();

  return (
    <div className="">
      <span className="font-semibold">Seřadit podle výše</span>
      <div className="form-control xs:flex-row md:mt-2 xl:flex-col 2xl:flex-row">
        <label className="label cursor-pointer py-1">
          <span className="label-text">Úroku po zdanění</span>
          <input
            type="radio"
            {...register('order')}
            value="interestAfterTax"
            className="radio ml-2 checked:bg-primary"
          />
        </label>
        <label className="label cursor-pointer py-1">
          <span className="label-text">Úrokové sazby</span>
          <input
            type="radio"
            {...register('order')}
            value="interestRate"
            className="radio ml-2 checked:bg-primary xs:mr-4 xl:mr-0 2xl:mr-4"
          />
        </label>
      </div>
    </div>
  );
};

export default Order;
