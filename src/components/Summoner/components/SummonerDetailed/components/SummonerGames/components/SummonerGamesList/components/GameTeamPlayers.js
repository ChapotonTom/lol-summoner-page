import React from "react";
import "../summonerGamesList.css";

import ReactTooltip from "react-tooltip";

export const GameTeamPlayers = (props) => {
  const { team, summonerName } = props;
  return (
    <div
      className="column px-1 py-1 is-2 game-team-container"
      style={{ width: "12%" }}
    >
      <ReactTooltip />
      {team.players.map((player, index) => {
        return (
          <div
            key={player.summonerName + index}
            className="game-team-player-container"
          >
            <img
              alt="playerChampionPicture"
              src={player.champion.imageUrl}
              className="game-team-player-champion-picture"
            />
            <div
              className="game-team-player-name"
              data-tip={player.summonerName}
              style={{
                fontWeight: player.summonerName === summonerName ? "bold" : "",
              }}
            >
              {player.summonerName}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameTeamPlayers;
