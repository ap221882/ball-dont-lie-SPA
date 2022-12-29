import React, { ReactElement } from 'react';

interface IButtonProps {
  icon: ReactElement;
}

export const Button = ({ icon }: IButtonProps) => {
  return <button>{icon}</button>;
};

export default Button;
