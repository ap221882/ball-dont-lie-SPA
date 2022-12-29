import { StyledHeading } from './heading.style';

type Props = {
  title?: string;
};

const Heading = ({ title }: Props) => {
  return <StyledHeading>{title}</StyledHeading>;
};

export default Heading;
