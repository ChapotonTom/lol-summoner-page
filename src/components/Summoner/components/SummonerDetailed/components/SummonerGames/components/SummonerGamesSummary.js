import React from "react";
import "../summonerGames.css";

export const SummonerGamesSummary = (props) => {
  return (
    <div className="container pt-0 summoner-matches-summary-container">
      <div className="columns py-2">
        <div className="column is-one-fifth">Total</div>
        <div className="column is-one-fifth">Ranked Solo</div>
        <div className="column is-one-quarter">Ranked Flex</div>
      </div>
      <div
        className="container columns is-marginless"
        style={{ border: "solid black" }}
      >
        <div className="column is-one-quarter">Total</div>
        <div className="column is-one-quarter">Ranked Solo</div>
        <div className="column is-one-quarter">Ranked Flex</div>
      </div>
    </div>
  );
};

export default SummonerGamesSummary;
