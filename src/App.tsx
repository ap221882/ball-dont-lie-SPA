import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import appStore from './store';
import { myAppRouter } from './routes';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <GlobalStyle />
        <RouterProvider router={myAppRouter} />
      </Provider>
    </>
  );
}
export default App;
