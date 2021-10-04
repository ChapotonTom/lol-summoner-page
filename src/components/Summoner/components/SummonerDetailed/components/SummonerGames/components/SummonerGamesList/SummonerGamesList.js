import React from "react";
import GameChampionAndStuff from "./components/GameChampionAndStuff";
import GameGeneralInfos from "./components/GameGeneralInfos";
import GameKDA from "./components/GameKDA";
import "./summonerGamesList.css";

import GameMoreStats from "./components/GameMoreStats";
import GameInventory from "./components/GameInventory";

const getGameStyle = (isWin, needRenew) => {
  if (needRenew) return "game-rematch";
  else if (isWin) return "game-victory";
  else return "game-defeat";
};

export const SummonerGamesList = (props) => {
  const { games } = props;
  return (
    <div className="container mt-3">
      {games.map((game) => {
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
              wards={game.stats.ward}
              isWin={game.isWin}
              needRenew={game.needRenew}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SummonerGamesList;
