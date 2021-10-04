import React, { useEffect, useState } from "react";
import GameChampionAndStuff from "./components/GameChampionAndStuff";
import GameGeneralInfos from "./components/GameGeneralInfos";
import GameKDA from "./components/GameKDA";
import "./summonerGamesList.css";

import GameMoreStats from "./components/GameMoreStats";
import GameInventory from "./components/GameInventory";

import { getSummonerMatchDetail } from "../../../../../../../../services/match";
// import { getItemInformation } from "../../../../../../../../services/item";

import { getRandomInt } from "../../../../../../../../utils/getRandomInt";
import GameTeamPlayers from "./components/GameTeamPlayers";

const getGameStyle = (isWin, needRenew) => {
  if (needRenew) return "game-rematch";
  else if (isWin) return "game-victory";
  else return "game-defeat";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <GameTeamPlayers
        team={teamsInformations[0]}
        summonerName={summonerName}
      />
      <GameTeamPlayers
        team={teamsInformations[1]}
        summonerName={summonerName}
      />
    </div>
  );
};

export default SummonerGamesList;
