import { StyledHeader } from './header.style';
import { Heading } from '../../components';

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Heading title="NBA Teams" />
    </StyledHeader>
  );
};

export default Header;
