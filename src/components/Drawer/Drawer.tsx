import React, {
  ReactElement,
  useState,
  Dispatch,
  SetStateAction,
  cloneElement,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import DrawerHeader from './DrawerHeader';

interface IDrawerProps {
  heading?: string;
  children: ReactElement;
}

interface IStyledDrawer {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const StyledDrawer = styled.div<IStyledDrawer>`
  top: 0;
  right: 0;
  transform: ${(props) =>
    props.drawerOpen ? 'translateX(0%)' : 'translateX(100%)'};
  background: var(--white);
  height: 100%;
  width: 35%;
  overflow: auto;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.1s ease-in-out;
  z-index: 999;
`;

const Drawer = ({ heading, children }: IDrawerProps) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const drawerRoot = document.querySelector('#drawer-root');

  let props = { setDrawerOpen };

  return createPortal(
    <StyledDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
      <DrawerHeader heading={heading} setDrawerOpen={setDrawerOpen} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, props);
        }
        return child;
      })}
    </StyledDrawer>,
    drawerRoot as Element,
  );
};

export default Drawer;
