import React, { useState, useEffect } from 'react';
import { getGameData } from '../../services';
import { IGameDataResponse } from '../../types';
import GameInfoHeading from './GameInfoHeading';
import RandomGameDetails from './RandomGameDetails';
import { StyledGameInfo } from './gameInfo.style';

type IGameInfoProps = {
  gameId: number;
  fullName?: string;
};

const GameInfo = ({ gameId, fullName }: IGameInfoProps) => {
  const [gameData, setGameData] = useState<IGameDataResponse>(
    {} as IGameDataResponse,
  );

  /**
   * For fetching game data according to the id in the route
   */
  useEffect(() => {
    (async () => {
      try {
        const gameDataResponse = await getGameData(gameId);
        setGameData(gameDataResponse);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [gameId]);

  const firstGameData = gameData?.data?.[0];

  return (
    <>
      <StyledGameInfo>
        <GameInfoHeading
          fullName={fullName}
          totalCount={gameData?.meta?.total_count}
        />
        <RandomGameDetails firstGameData={firstGameData} />
      </StyledGameInfo>
    </>
  );
};

export default GameInfo;
