import { useAtom } from 'jotai';
import React from 'react';
import { filteredValuesLength } from '../../atoms/atoms';

const FilteredRowsLength = () => {
  const [length] = useAtom(filteredValuesLength);
  return <span className="font-medium">{length}</span>;
};

export default FilteredRowsLength;
