import React from "react";
import SummonerGamesSummaryTabs from "./components/SummonerGamesSummaryTabs";
import "./summonerGamesSummary.css";

export const SummonerGamesSummary = (props) => {
  const { gameTypeSelected, setGameTypeSelected } = props;
  return (
    <div className="container pt-0">
      <SummonerGamesSummaryTabs
        gameTypeSelected={gameTypeSelected}
        setGameTypeSelected={setGameTypeSelected}
      />
      <div className="container columns m-0 summoner-matches-summary-stats">
        <div className="column is-one-third">Total</div>
        <div className="column is-one-quarter">Ranked Solo</div>
        <div className="column is-one-quarter">Ranked Flex</div>
      </div>
    </div>
  );
};

export default SummonerGamesSummary;
