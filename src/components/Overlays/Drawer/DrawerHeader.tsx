import styled from 'styled-components';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

import { ImCross } from '../../../assets/icons';
import Heading from '../../Heading/Heading';

interface IDrawerHeaderProps {
  heading?: string;
  hideOverlay: () => { type: 'overlay/hideOverlay' };
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

const DrawerHeader = ({ heading, hideOverlay }: IDrawerHeaderProps) => {
  const handleClose = () => hideOverlay();

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
