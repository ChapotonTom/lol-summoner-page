import React from "react";
import SummonerGamesChampions from "./components/SummaryGamesChampions";
import SummonerGamesKDA from "./components/SummaryGamesKDA";
import SummonerGamesPositions from "./components/SummaryGamesPositions";
import SummonerGamesSummaryTabs from "./components/SummonerGamesSummaryTabs";
import "./summonerGamesSummary.css";

export const SummonerGamesSummary = (props) => {
  const {
    gameTypeSelected,
    setGameTypeSelected,
    gamesSummary,
    gamesChampions,
    gamesPositions,
  } = props;
  return (
    <div className="container pt-0">
      <SummonerGamesSummaryTabs
        gameTypeSelected={gameTypeSelected}
        setGameTypeSelected={setGameTypeSelected}
      />
      <div className="container columns m-0 summoner-matches-summary-stats">
        {gamesSummary.wins && <SummonerGamesKDA gamesSummary={gamesSummary} />}
        {gamesChampions.length && (
          <SummonerGamesChampions gamesChampions={gamesChampions} />
        )}
        {gamesPositions.length && (
          <SummonerGamesPositions gamesPositions={gamesPositions} />
        )}
      </div>
    </div>
  );
};

export default SummonerGamesSummary;
