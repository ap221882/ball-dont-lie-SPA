import { Outlet } from 'react-router-dom';

import { TableContainer, Header, SearchTeam } from '../../containers';

import { StyledHomePage } from './homePage.style';

const HomePage = () => {
  return (
    <StyledHomePage>
      <Header />
      <SearchTeam />
      <TableContainer />
      <Outlet />
    </StyledHomePage>
  );
};

export default HomePage;
