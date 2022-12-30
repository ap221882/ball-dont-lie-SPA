import { useAppDispatch } from '../../hooks/typesHooks';

import { hideOverlay as hideOverlayAction } from '../../slices/overlaySlice';
import { IOverlayInitialState } from '../../slices/slices.type';
import { Drawer } from './index';

const OverLayMapping: Record<string, any> = {
  Drawer: Drawer,
};

const Overlay = ({ data, overlay }: IOverlayInitialState) => {
  const dispatch = useAppDispatch();
  const hideOverlay = () => dispatch({ type: hideOverlayAction.type });

  const RenderedOverlay = OverLayMapping[overlay];

  if (RenderedOverlay) {
    return <RenderedOverlay {...data} hideOverlay={hideOverlay} />;
  }
  return null;
};
