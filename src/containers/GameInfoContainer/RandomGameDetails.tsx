import { ITeamGameData } from '../../types';
import { StyledRandomGameDetails } from './gameInfo.style';

interface IRandomGameDetailsProps {
  firstGameData: ITeamGameData;
}

const RandomGameDetails = ({ firstGameData }: IRandomGameDetailsProps) => {
  return (
    <StyledRandomGameDetails>
      <h6>Random Game Details</h6>
      <p>
        <span>Date</span> <span>{firstGameData?.date}</span>
      </p>
      <p>
        <span>Home Team</span> <span>{firstGameData?.home_team?.name}</span>
      </p>
      <p>
        <span>Home Team Score</span>
        <span>{firstGameData?.home_team_score}</span>
      </p>
      <p>
        <span>Visitor Team</span>
        <span>{firstGameData?.visitor_team?.name}</span>
      </p>
      <p>
        <span>Visitor Team Score</span>
        <span>{firstGameData?.visitor_team_score}</span>
      </p>
    </StyledRandomGameDetails>
  );
};

export default RandomGameDetails;
