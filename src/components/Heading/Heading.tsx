import { StyledHeading } from './heading.style';

interface IHeadingProps {
  title?: string;
}

const Heading = ({ title }: IHeadingProps) => {
  return <StyledHeading>{title}</StyledHeading>;
};

export default Heading;
