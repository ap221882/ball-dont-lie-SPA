import React, {
  ReactElement,
  cloneElement,
  isValidElement,
  Children,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../../hooks/typesHooks';

import { hideOverlay as hideOverlayAction } from '../../../slices/overlaySlice';
import DrawerHeader from './DrawerHeader';

interface IDrawerProps {
  heading?: string;
  children: ReactElement;
}

interface IStyledDrawer {
  showOverlay: boolean;
}

const StyledDrawer = styled.div<IStyledDrawer>`
  top: 0;
  right: 0;
  transform: ${(props) =>
    props.showOverlay ? 'translateX(0%)' : 'translateX(100%)'};
  background: var(--white);
  height: 100%;
  width: 35%;
  overflow: auto;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;

const Drawer = ({ heading, children }: IDrawerProps) => {
  const dispatch = useAppDispatch();
  const hideOverlay = () => dispatch({ type: hideOverlayAction.type });
  const showOverlay = useAppSelector((state) => state.overlay.showOverlay);
  const drawerRoot = document.querySelector('#drawer-root');

  let propsToBeSendToChild = { showOverlay };

  return createPortal(
    <StyledDrawer showOverlay={showOverlay}>
      <DrawerHeader heading={heading} hideOverlay={hideOverlay} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, propsToBeSendToChild);
        }
        return child;
      })}
    </StyledDrawer>,
    drawerRoot as Element,
  );
};

export default Drawer;
