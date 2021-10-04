import React from "react";
import "../summonerGamesList.css";

export const GameMoreStats = (props) => {
  const { stats, championLevel } = props;
  return (
    <div className="column px-1 py-1 is-1">
      <div className="mt-2 game-stats-level">Level {championLevel}</div>
      <div className="mt-1 game-stats-cs">
        {stats.cs} ({stats.csPerMin}) CS
      </div>
      <div className="mt-1 game-stats-kills-contribution">
        P/Kill {stats.contributionForKillRate}
      </div>
    </div>
  );
};

export default GameMoreStats;
