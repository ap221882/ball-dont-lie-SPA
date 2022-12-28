import { TableContainer, Header, SearchTeam } from '../../containers';

import { StyledHomePage } from './homePage.style';
type Props = {};

const HomePage = (props: Props) => {
  return (
    <StyledHomePage>
      <Header />
      <SearchTeam />
      <TableContainer />
    </StyledHomePage>
  );
};

export default HomePage;
