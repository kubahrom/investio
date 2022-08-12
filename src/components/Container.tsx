import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className="container mx-auto px-4 max-w-6xl">{children}</div>;
};

export default Container;
