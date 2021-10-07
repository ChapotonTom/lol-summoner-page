import React from "react";
import "../summonerGamesSummary.css";

import { calculateRatio } from "../../../../../../../../../utils/calculateRatio";

import notFoundChampion from "../../../../../../../../../assets/images/group@2x.png";

import { getKDAColor } from "../../../../../../../../../utils/getKDAColorCode";

const calculateKDA = (kills, assists, deaths) => {
  return (kills + assists) / deaths;
};

export const SummonerGamesChampions = (props) => {
  const { gamesChampions } = props;
  const missingChampions = 3 - gamesChampions.length;
  return (
    <div
      className="column is-one-third"
      style={{ borderRight: "solid #cdd2d2", borderWidth: "thin" }}
    >
      {gamesChampions.map((champion, index) => {
        const winRatio = calculateRatio(champion.wins, champion.games);
        const championKDA = calculateKDA(
          champion.kills,
          champion.assists,
          champion.deaths
        );
        return (
          <div key={index} style={{ display: "inline-block", width: "90%" }}>
            <div className="games-summary-champion-container">
              <div style={{ flex: "1 0 20%" }}>
                <img
                  alt="champion-icon"
                  src={champion.imageUrl}
                  className={"games-summary-champion-icon"}
                />
              </div>
              <div style={{ marginLeft: 10, flex: "1 0 75%" }}>
                <div className={"games-summary-champion-name"}>
                  {champion.name}
                </div>
                <div className={"games-summary-champion-stats"}>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: winRatio > 60 ? "#c6443e" : "#333333",
                    }}
                  >
                    {winRatio}%
                  </span>{" "}
                  ({champion.wins}W {champion.losses}L)
                  <span style={{ color: "#cdd2d2" }}>{" | "}</span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: getKDAColor(championKDA),
                    }}
                  >
                    {championKDA.toFixed(2)} KDA
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {missingChampions > 0 &&
        [...Array(missingChampions)].map((missingChampion, index) => {
          return (
            <div key={index} style={{ display: "inline-block" }}>
              <div
                className="games-summary-champion-container"
                style={{ marginLeft: 5 }}
              >
                <img
                  alt="champion-icon"
                  src={notFoundChampion}
                  className={"games-summary-champion-icon"}
                />
                <div style={{ marginLeft: 10 }}>
                  <div className={"games-summary-champion-name-not-found"}>
                    Not found champion
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SummonerGamesChampions;
