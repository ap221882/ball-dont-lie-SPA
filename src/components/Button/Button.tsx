import React, { ReactElement } from 'react';

type IButtonProps = {
  icon: ReactElement;
};

export const Button = ({ icon }: IButtonProps) => {
  return <button>{icon}</button>;
};

export default Button;
