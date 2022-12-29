import { useParams } from 'react-router-dom';

import { Drawer } from '../../components';
import { useAppSelector } from '../../hooks/typesHooks';
import GameInfo from './GameInfo';

const GameInfoContainer = () => {
  const { id } = useParams();
  const teams = useAppSelector((state) => state.teams.teams);
  const selectedTeam = teams.find((team) => team.id === Number(id));

  return (
    <div>
      <Drawer heading={selectedTeam?.name}>
        <GameInfo gameId={Number(id)} fullName={selectedTeam?.full_name} />
      </Drawer>
    </div>
  );
};

export default GameInfoContainer;
