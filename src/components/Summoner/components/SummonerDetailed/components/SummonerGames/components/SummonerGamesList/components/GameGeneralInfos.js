import React from "react";
import "../summonerGamesList.css";

import moment from "moment";

const getGameResultStr = (isWin, needRenew) => {
  if (needRenew) return "Remake";
  else if (isWin) return "Victory";
  else return "Defeat";
};

const getGameResultColor = (isWin, needRenew) => {
  if (needRenew) return "#000000";
  else if (isWin) return "#2c709b";
  else return "#d0021b";
};

const getSeparatorColor = (isWin, needRenew) => {
  if (needRenew) return "Remake";
  else if (isWin) return "#94b9d6";
  else return "#d0a6a5";
};

const getGameDateStr = (howManyDaysAgo, gameDate) => {
  if (howManyDaysAgo > 0) return `${howManyDaysAgo} days ago`;
  return `Today ${gameDate.format("HH:mm")}`;
};

export const GameGeneralInfos = (props) => {
  const { gameType, createDate, isWin, needRenew, gameLength } = props;

  const nowDate = moment();
  const gameDate = moment.unix(createDate);
  const howManyDaysAgo = nowDate.diff(gameDate, "days");

  return (
    <div
      className="column px-1 py-1 is-one-fifth"
      style={{ width: "12%", minWidth: 70 }}
    >
      <div className="game-general-infos-gameType">{gameType}</div>
      <div className="game-general-infos-gameCreation">
        {getGameDateStr(howManyDaysAgo, gameDate)}
      </div>
      <div>
        <div
          className="game-general-infos-separator"
          style={{
            borderBottom: `solid ${getSeparatorColor(isWin, needRenew)}`,
            borderBottomWidth: "thin",
          }}
        />
      </div>
      <div
        className="game-general-infos-gameResult"
        style={{ color: getGameResultColor(isWin, needRenew) }}
      >
        {getGameResultStr(isWin, needRenew)}
      </div>
      <div className="game-general-infos-gameLength">
        {Math.round(gameLength / 60)}m {gameLength % 60}s
      </div>
    </div>
  );
};

export default GameGeneralInfos;
