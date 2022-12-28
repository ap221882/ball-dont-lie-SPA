import React, { ReactElement } from 'react';

type IButtonProps = {
  icon: ReactElement;
};

export const Button = ({ icon }: IButtonProps) => {
  return <div>{icon}</div>;
};

export default Button;
