import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { getGameData } from '../../services';
import { IGameDataResponse } from '../../types';

type IGameInfoProps = {
  gameId: number;
  fullName?: string;
  setDrawerOpen?: Dispatch<SetStateAction<boolean>>;
};
// TODO - DO VIA GLOBAL STATE - DRAWER TOGGLE
const GameInfo = ({ gameId, fullName, setDrawerOpen }: IGameInfoProps) => {
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
        setDrawerOpen?.(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [gameId]);

  return (
    <>
      <h3>Team full name: {fullName}</h3>
      <h4>Total Games in 2021: {gameData?.meta?.total_count}</h4>
      <section>
        <h5>Random Game Details</h5>
        <table>
          <tbody>
            <tr>
              <td>Date</td>
              <td>{gameData?.data?.[0]?.date}</td>
            </tr>
            <tr>
              <td>Home Team</td>
              <td>{gameData?.data?.[0]?.home_team?.name}</td>
            </tr>
            <tr>
              <td>Home Team Score</td>
              <td>{gameData?.data?.[0]?.home_team_score}</td>
            </tr>
            <tr>
              <td>Visitor Team</td>
              <td>{gameData?.data?.[0]?.visitor_team?.name}</td>
            </tr>
            <tr>
              <td>Visitor Team Score</td>
              <td>{gameData?.data?.[0]?.visitor_team_score}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default GameInfo;
