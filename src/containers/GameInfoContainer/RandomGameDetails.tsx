import { useTranslation } from 'react-i18next';
import { ITeamGameData } from '../../types';
import { StyledRandomGameDetails } from './gameInfo.style';

interface IRandomGameDetailsProps {
  firstGameData: ITeamGameData;
}

const RandomGameDetails = ({ firstGameData }: IRandomGameDetailsProps) => {
  const { t } = useTranslation();
  return (
    <StyledRandomGameDetails>
      <h6>{t('drawerLabels.randomGameDetail.heading')}</h6>
      <p>
        <span>{t('drawerLabels.randomGameDetail.row1')}</span>
        <span>{firstGameData?.date}</span>
      </p>
      <p>
        <span>{t('drawerLabels.randomGameDetail.row2')}</span>
        <span>{firstGameData?.home_team?.name}</span>
      </p>
      <p>
        <span>{t('drawerLabels.randomGameDetail.row3')}</span>
        <span>{firstGameData?.home_team_score}</span>
      </p>
      <p>
        <span>{t('drawerLabels.randomGameDetail.row4')}</span>
        <span>{firstGameData?.visitor_team?.name}</span>
      </p>
      <p>
        <span>{t('drawerLabels.randomGameDetail.row5')}</span>
        <span>{firstGameData?.visitor_team_score}</span>
      </p>
    </StyledRandomGameDetails>
  );
};

export default RandomGameDetails;
