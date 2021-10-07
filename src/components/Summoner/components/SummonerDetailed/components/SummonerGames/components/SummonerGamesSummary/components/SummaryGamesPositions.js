import React from "react";
import "../summonerGamesSummary.css";

import { calculateRatio } from "../../../../../../../../../utils/calculateRatio";

import topIcon from "../../../../../../../../../assets/images/icon-mostposition-top.png";
import jungleIcon from "../../../../../../../../../assets/images/icon-mostposition-jng.png";
import midIcon from "../../../../../../../../../assets/images/icon-mostposition-mid.png";
import adcIcon from "../../../../../../../../../assets/images/icon-mostposition-adc.png";
import supIcon from "../../../../../../../../../assets/images/icon-mostposition-sup.png";

const positionIconKeywords = {
  TOP: topIcon,
  JNG: jungleIcon,
  MID: midIcon,
  ADC: adcIcon,
  SUP: supIcon,
};

export const SummonerGamesPositions = (props) => {
  const { gamesPositions } = props;
  const randomHighPercentage = Math.floor(Math.random() * (100 - 60) + 60);
  const secondRandomBestPercentage = (100 - randomHighPercentage) / 2;
  return (
    <div className="column is-one-quarter">
      <div className="mt-1 games-summary-prefered-position">
        Preferred Position (rank)
      </div>
      {gamesPositions.map((position, index) => {
        return (
          <div key={index} style={{ display: "inline-block", width: "90%" }}>
            <div
              key={position.position + index}
              className="games-summary-position-container"
            >
              <div style={{ flex: "1 0 20%" }}>
                <img
                  alt="position-icon"
                  src={positionIconKeywords[position.position]}
                  className={"games-summary-position-icon"}
                />
              </div>
              <div style={{ marginLeft: 10, flex: "1 0 75%" }}>
                <div className={"games-summary-position-name"}>
                  {position.positionName}
                </div>
                <div className={"games-summary-position-stats"}>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#1f8ecd",
                    }}
                  >
                    {index === 0
                      ? randomHighPercentage
                      : secondRandomBestPercentage}
                    %
                  </span>
                  <span style={{ color: "#cdd2d2" }}>{" | "}</span>
                  Win Rate
                  <span style={{ fontWeight: "bold" }}>
                    {` ${calculateRatio(position.wins, position.games)}%`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummonerGamesPositions;
