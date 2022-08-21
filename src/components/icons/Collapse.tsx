import React from 'react';

type Props = {
  open: boolean
}

const Collapse:React.FC<Props> = ({open}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 512 512"
      className={`ml-2 ${!open && 'rotate-180'} text-neutral`}
    >
      <path
        d="M249.5 150.2c-3.5.9-15.8 12.8-92.3 89.2-48.6 48.4-89 89.3-89.8 90.8-5.3 10.1-.8 23.5 9.7 28.9 4.6 2.3 12.5 2.5 17.7.4 2.6-1.1 27.2-25 82.5-80.3l78.7-78.7 78.8 78.7c43.3 43.2 80.1 79.3 81.9 80.2 6.5 3.2 17.6 1.4 23.1-3.7 6.6-6.1 8.6-17.4 4.5-25.2-2.7-4.9-174.4-176.6-179-178.9-4.3-2.2-10.9-2.7-15.8-1.4z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Collapse;
