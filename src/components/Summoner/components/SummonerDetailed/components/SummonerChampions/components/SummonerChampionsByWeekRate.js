import React from "react";
import "../summonerChampions.css";

import { calculateRatio } from "../../../../../../../utils/calculateRatio";

export const SummonerChampionsByWeekRate = (props) => {
  const { champion, isLastElement } = props;

  const championWinRate = calculateRatio(
    champion.wins,
    champion.wins + champion.losses
  );

  return (
    <div
      className={`container columns py-1 summoner-champions-row ${
        isLastElement ? "last-champion-row" : ""
      }`}
    >
      <div className="column py-0 is-one-fifth">
        <img
          alt={champion.name}
          src={champion.imageUrl}
          className="summoner-champions-image"
        />
      </div>
      <div className="column pt-4 pl-0 pr-1 is-one-fifth">
        <div className="summoner-champions-top-detail">{champion.name}</div>
      </div>
      <div
        className="column pt-4 pl-0 pr-0 is-one-fifth"
        style={{ width: "40px" }}
      >
        <div
          className="summoner-champions-top-detail"
          style={{ color: "#879292" }}
        >
          {championWinRate}%
        </div>
      </div>
      <div className="column px-1">
        <div className="summoner-champion-ratio-bar">
          <div
            className="summoner-champion-win-rate-bar"
            style={{
              width: `${championWinRate}%`,
              backgroundColor: `${champion.wins > 0 ? "#1f8ecd" : "#ee5a52"}`,
            }}
          >
            <div>{champion.wins}W</div>{" "}
          </div>
          <div
            className="summoner-champion-loose-rate-bar"
            style={{
              width: `${100 - championWinRate}%`,
              backgroundColor: `${champion.losses > 0 ? "#ee5a52" : "#1f8ecd"}`,
            }}
          >
            <div>{champion.losses}L</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummonerChampionsByWeekRate;
