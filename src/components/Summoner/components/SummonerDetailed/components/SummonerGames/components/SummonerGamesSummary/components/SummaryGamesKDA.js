import React from "react";
import "../summonerGamesSummary.css";

import { Doughnut } from "react-chartjs-2";

import { getRandomInt } from "../../../../../../../../../utils/getRandomInt";

import { getKDAColor } from "../../../../../../../../../utils/getKDAColorCode";

export const generateData = (winRatio, lossRatio) => {
  return {
    datasets: [
      {
        data: [lossRatio, winRatio],
        backgroundColor: ["#ee5a52", "#1f8ecd"],
        borderColor: ["#ee5a52", "#1f8ecd"],
      },
    ],
    options: { cutoutPercentage: 10 },
    borderWidth: 0,
  };
};

export const options = {
  cutout: 25,
};

export class SummonerGamesKDA extends React.PureComponent {
  render() {
    const { gamesSummary } = this.props;
    const { assists, deaths, kills, losses, wins } = gamesSummary;
    const totalGames = wins + losses;

    const winRatio = (100 * wins) / totalGames;
    const lossRatio = (100 * losses) / totalGames;

    const kda = (kills + assists) / deaths;

    return (
      <div
        className="column is-two-fifths"
        style={{ borderRight: "solid #cdd2d2", borderWidth: "thin" }}
      >
        <div className="container colums" style={{ display: "flex" }}>
          <div className="column pt-0 is-half">
            <div style={{ display: "inline-block" }}>
              <div className="game-summary-kda-games">
                {totalGames}G {wins}W {losses}L
              </div>
              <div style={{ width: 90, height: 90 }}>
                <Doughnut
                  data={generateData(winRatio, lossRatio)}
                  options={options}
                />
                <div className="game-summary-kda-graph-text">
                  {winRatio.toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
          <div className="column mt-5 is-half">
            <div className="game-kda-stats">
              {kills}
              <span style={{ color: "#948e8d" }}> / </span>
              <span style={{ color: "#d0021b" }}>{assists}</span>
              <span style={{ color: "#948e8d" }}> / </span> {deaths}
            </div>
            <div className="game-kda-stats-mean">
              <span style={{ color: getKDAColor(kda) }}>
                {kda.toFixed(2)}:1{" "}
              </span>
              <span style={{ color: "#d0021b", fontWeight: "normal" }}>
                ({getRandomInt(100)}%)
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummonerGamesKDA;
