import React from "react";
import "../summonerGamesList.css";

export const GameKDA = (props) => {
  const { stats } = props;
  return (
    <div className="column px-1 py-1 is-2">
      <div className="mt-2 game-kills-assists-deaths">
        {stats.kill}
        <span style={{ color: "#948e8d" }}> / </span>
        <span style={{ color: "#d0021b" }}>{stats.assist}</span>
        <span style={{ color: "#948e8d" }}> / </span> {stats.death}
      </div>
      <div className="mt-1 game-kda-str">
        <span style={{ fontWeight: "bold" }}>{stats.kdaString}</span>
        <span style={{ fontWeight: "bold", fontFamily: "AppleSDGothicNeo" }}>
          {" KDA"}
        </span>
      </div>
      <div className="mt-1 container game-killing-badge">
        <div style={{ margin: "auto", display: "flex" }}>
          {stats.largestMultiKillString && (
            <div className="game-multi-killings">
              {stats.largestMultiKillString}
            </div>
          )}
          {stats.opScoreBadge && (
            <div className="game-score-badge">{stats.opScoreBadge}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameKDA;
