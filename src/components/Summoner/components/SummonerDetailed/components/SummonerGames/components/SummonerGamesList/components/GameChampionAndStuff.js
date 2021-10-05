import React from "react";
import "../summonerGamesList.css";

import { getFileName } from "../../../../../../../../../utils/getFileName";

export const GameChampionAndStuff = (props) => {
  const { game } = props;

  const championName = getFileName(game.champion.imageUrl);

  return (
    <div
      className="column p-0 is-1 game-champion-stuff-container"
      style={{ minWidth: 100 }}
    >
      <div className="container columns pt-2 mb-0" style={{ minHeight: 75 }}>
        <div className="column pr-0 pb-0 is-half" style={{ minWidth: 60 }}>
          <img
            className="game-champion-picture"
            alt="champion"
            src={game.champion.imageUrl}
          />
        </div>
        <div
          className="column is-marginless is-half pl-0 pb-0"
          style={{ minWidth: 60 }}
        >
          <img
            alt="spell-1"
            className="game-spell-peak-icon"
            src={game.spells[0].imageUrl}
          />
          <img
            alt="peak-1"
            className="game-spell-peak-icon"
            src={game.peak[0]}
          />
          <img
            alt="spell-2"
            className="game-spell-peak-icon"
            src={game.spells[1].imageUrl}
          />
          <img
            alt="peak-2"
            className="game-spell-peak-icon"
            src={game.peak[1]}
          />
        </div>
      </div>
      <div className="container game-champion-name">{championName}</div>
    </div>
  );
};

export default GameChampionAndStuff;
