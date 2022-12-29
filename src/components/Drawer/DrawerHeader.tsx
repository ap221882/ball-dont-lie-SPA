import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { ImCross } from '../../assets/icons';
import Heading from '../Heading/Heading';

interface IDrawerHeaderProps {
  heading?: string;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const StyledDrawerHeader = styled.div`
  background: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding-right: 1.5rem;
  }
`;

const DrawerHeader = ({ heading, setDrawerOpen }: IDrawerHeaderProps) => {
  const handleClose = () => setDrawerOpen(false);

  return (
    <StyledDrawerHeader>
      <Heading title={heading} />
      <span onClick={handleClose}>
        <ImCross />
      </span>
    </StyledDrawerHeader>
  );
};

export default DrawerHeader;
