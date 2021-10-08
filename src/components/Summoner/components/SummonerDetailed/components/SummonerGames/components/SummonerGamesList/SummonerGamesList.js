/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import GameChampionAndStuff from "./components/GameChampionAndStuff";
import GameGeneralInfos from "./components/GameGeneralInfos";
import GameKDA from "./components/GameKDA";
import "./summonerGamesList.css";

import GameMoreStats from "./components/GameMoreStats";
import GameInventory from "./components/GameInventory";

import { getSummonerMatchDetail } from "../../../../../../../../services/match";

import { getRandomInt } from "../../../../../../../../utils/getRandomInt";
import GameTeamPlayers from "./components/GameTeamPlayers";
import { Loader } from "../../../../../../../../commons/Loader";

import ArrowDown from "../../../../../../../../assets/images/arrow-down.png";

const getGameStyle = (isWin, needRenew) => {
  if (needRenew) return "game-rematch";
  else if (isWin) return "game-victory";
  else return "game-defeat";
};

const getLastColumnStyle = (isWin, needRenew) => {
  let backgroundColor = "#e89c95";
  let border = "solid #c8817c";
  if (needRenew) {
    backgroundColor = "#a7a7a7";
    border = "solid #999999";
  } else if (isWin) {
    backgroundColor = "#7fb0e1";
    border = "solid #549dc7";
  }
  return { backgroundColor, border };
};

export const SummonerGamesList = (props) => {
  const { game, itemsDetails, summonerName } = props;

  const [teamsInformations, setTeamsInformations] = useState();

  const [isGameLoading, setIsGameLoading] = useState(false);

  const insertPlayerRandomly = (teams) => {
    const randomTeam = getRandomInt(2);
    const randomPlayer = getRandomInt(4);

    teams[randomTeam].players[randomPlayer].summonerName = summonerName;
    teams[randomTeam].players[randomPlayer].champion = game.champion;
    setTeamsInformations(teams);
  };

  useEffect(() => {
    setIsGameLoading(true);
    getSummonerMatchDetail(game.gameId).then((result) => {
      insertPlayerRandomly(result.teams);
      setIsGameLoading(false);
    });
  }, [game.gameId]);

  if (isGameLoading) return <Loader />;
  if (!teamsInformations) return <div />;
  return (
    <div
      key={game.gameId}
      className={`columns mx-0 mt-0 summoner-game-details-container ${getGameStyle(
        game.isWin,
        game.needRenew
      )}`}
    >
      <div className={"column px-1 py-1 is-3"}>
        <div className={"columns mx-0 mt-0 is-mobile"}>
          <GameGeneralInfos
            gameType={game.gameType}
            createDate={game.createDate}
            isWin={game.isWin}
            needRenew={game.needRenew}
            gameLength={game.gameLength}
          />
          <GameChampionAndStuff game={game} />
        </div>
      </div>
      <div className={"column is-flex py-1 px-1 is-3"}>
        <GameKDA stats={game.stats.general} />
        <GameMoreStats
          stats={game.stats.general}
          championLevel={game.champion.level}
        />
      </div>
      <div className={"column py-1 is-2"}>
        <GameInventory
          items={game.items}
          itemsDetails={itemsDetails}
          wards={game.stats.ward}
          isWin={game.isWin}
          needRenew={game.needRenew}
        />
      </div>
      <div className={"column py-1 is-flex px-0 is-3"}>
        <GameTeamPlayers
          team={teamsInformations[0]}
          summonerName={summonerName}
        />
        <GameTeamPlayers
          team={teamsInformations[1]}
          summonerName={summonerName}
        />
      </div>
      <div className={"column m-0 p-0 is-1"}>
        <div
          className="summoner-game-more-info"
          style={{
            ...getLastColumnStyle(game.isWin, game.needRenew),
          }}
          data-tip="(Feature not available)"
        >
          <img
            alt="arrow-down"
            src={ArrowDown}
            className={`summoner-game-arrow-defeat-${getGameStyle(
              game.isWin,
              game.needRenew
            )}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SummonerGamesList;
