import React from "react";
import "../summonerGamesList.css";

import ReactTooltip from "react-tooltip";
import { getFileName } from "../../../../../../../../../utils/getFileName";

export const GameTeamPlayers = (props) => {
  const { team, summonerName } = props;
  return (
    <div
      className="game-team-container pt-2 is-flex-grow-1"
      style={{ width: "50%" }}
    >
      <ReactTooltip />
      <div style={{ display: "inline-block", width: "90px" }}>
        {team.players.map((player, index) => {
          const championName = getFileName(player.champion.imageUrl);
          return (
            <div
              key={player.summonerName + index}
              className="game-team-player-container"
            >
              <img
                alt="playerChampionPicture"
                src={player.champion.imageUrl}
                className="game-team-player-champion-picture"
                data-tip={championName}
                style={{
                  borderRadius:
                    player.summonerName === summonerName ? "50%" : "",
                }}
              />
              <div
                className="game-team-player-name"
                data-tip={player.summonerName}
                style={{
                  fontWeight:
                    player.summonerName === summonerName ? "bold" : "",
                }}
              >
                {player.summonerName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameTeamPlayers;
