import React from "react";
import "../summonerGamesSummary.css";

export const SummonerGamesSummaryTabs = (props) => {
  const { gameTypeSelected, setGameTypeSelected } = props;
  return (
    <div className="columns is-mobile mx-0 mb-0 summoner-matches-summary-tab">
      <div className="column column py-0 is-1-desktop is-one-fifth-mobile">
        <div
          className={`summoner-matches-summary-tab-text${
            gameTypeSelected === "total" ? "-selected" : ""
          }`}
          onClick={() => setGameTypeSelected("total")}
        >
          Total
        </div>
      </div>
      <div className="column p-0 is-2-desktop is-one-quarter-mobile">
        <div
          className={`summoner-matches-summary-tab-text${
            gameTypeSelected === "solo" ? "-selected" : ""
          }`}
          onClick={() => setGameTypeSelected("solo")}
        >
          Ranked Solo
        </div>
      </div>
      <div className="column p-0 is-2-desktop is-one-quarter-mobile">
        <div
          className={`summoner-matches-summary-tab-text${
            gameTypeSelected === "flex" ? "-selected" : ""
          }`}
          onClick={() => setGameTypeSelected("flex")}
        >
          Ranked Flex
        </div>
      </div>
    </div>
  );
};

export default SummonerGamesSummaryTabs;
