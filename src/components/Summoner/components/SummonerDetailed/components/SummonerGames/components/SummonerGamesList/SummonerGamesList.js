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

  const insertPlayerRandomly = (teams) => {
    const randomTeam = getRandomInt(2);
    const randomPlayer = getRandomInt(4);

    teams[randomTeam].players[randomPlayer].summonerName = summonerName;
    teams[randomTeam].players[randomPlayer].champion = game.champion;
    setTeamsInformations(teams);
  };

  useEffect(() => {
    getSummonerMatchDetail(game.gameId).then((result) =>
      insertPlayerRandomly(result.teams)
    );
  }, [game.gameId]);

  if (!teamsInformations) return <div />;
  return (
    <div
      key={game.gameId}
      className={`columns mx-0 mt-0 summoner-game-details-container ${getGameStyle(
        game.isWin,
        game.needRenew
      )}`}
    >
      <GameGeneralInfos
        gameType={game.gameType}
        createDate={game.createDate}
        isWin={game.isWin}
        needRenew={game.needRenew}
        gameLength={game.gameLength}
      />
      <GameChampionAndStuff game={game} />
      <GameKDA stats={game.stats.general} />
      <GameMoreStats
        stats={game.stats.general}
        championLevel={game.champion.level}
      />
      <GameInventory
        items={game.items}
        itemsDetails={itemsDetails}
        wards={game.stats.ward}
        isWin={game.isWin}
        needRenew={game.needRenew}
      />
      <div className={"column summoner-game-team-container p-1 is-3"}>
        <GameTeamPlayers
          team={teamsInformations[0]}
          summonerName={summonerName}
        />
        <GameTeamPlayers
          team={teamsInformations[1]}
          summonerName={summonerName}
        />
      </div>
      <div
        style={{
          width: "40px",
          height: "auto",
          minHeight: "40px",
          ...getLastColumnStyle(game.isWin, game.needRenew),
        }}
      ></div>
    </div>
  );
};

export default SummonerGamesList;
