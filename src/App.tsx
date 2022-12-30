import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { myAppRouter } from './routes';
import { useAppSelector } from './hooks/typesHooks';

function App() {
  const showOverlay = useAppSelector((state) => state.overlay.showOverlay);
  return (
    <>
      <GlobalStyle showOverlay={showOverlay} />
      <RouterProvider router={myAppRouter} />
    </>
  );
}
export default App;
