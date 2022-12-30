import { useTranslation } from 'react-i18next';

import { StyledHeader } from './header.style';
import { Heading } from '../../components';

const Header = () => {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <Heading title={t('appHeading.title') as string} />
    </StyledHeader>
  );
};

export default Header;
