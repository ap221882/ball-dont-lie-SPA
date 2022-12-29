import React, { ReactElement } from 'react';
import Heading from '../Heading/Heading';

interface IDrawerProps {
  heading?: string;
  children: ReactElement;
}

const Drawer = ({ heading, children }: IDrawerProps) => {
  return (
    <>
      <Heading title={heading} />
      {children}
    </>
  );
};

export default Drawer;
