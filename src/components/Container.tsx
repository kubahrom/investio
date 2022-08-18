import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-6xl px-2 xs:px-4 md:px-8 2xl:max-w-7xl">
      {children}
    </div>
  );
};

export default Container;
