import React from "react";
import "./summonerLeagues.css";

import { calculateRatio } from "../../../../../../utils/calculateRatio";

import unrankedPicture from "../../../../../../assets/images/unranked.png";

export const SummonerLeagueUnrankedContainer = (league) => {
  return (
    <div className="container columns py-3 mb-5 summoner-league-container">
      <div className="column p-0 is-one-third">
        <img
          alt="summoner-league-pic"
          src={unrankedPicture}
          style={{
            width: 64,
            height: 64,
          }}
        />
      </div>
      <div className="column" style={{ textAlign: "left" }}>
        <div className="summoner-league-name">{league.tierRank.name}</div>
        <div className="summoner-league-division-unranked">Unranked</div>
      </div>
    </div>
  );
};

export const SummonerLeagueContainer = (props) => {
  const { league } = props;

  const totalGames = league.wins + league.losses;

  if (!league.hasResults) {
    return SummonerLeagueUnrankedContainer(league);
  }

  return (
    <div className="container columns py-3 mb-5 summoner-league-container">
      <div className="column p-0 is-one-third">
        <img
          alt="summoner-league-pic"
          src={league.tierRank.imageUrl}
          style={{ width: 104 }}
        />
      </div>
      <div className="column py-0 px-1" style={{ textAlign: "left" }}>
        <div className="summoner-league-name">{league.tierRank.name}</div>
        <div className="summoner-league-top">
          <span style={{ fontWeight: "bold" }}>top</span> (total {totalGames}{" "}
          Played)
        </div>
        <div className="summoner-league-division">{league.tierRank.tier}</div>
        <div className="summoner-league-stats">
          <span style={{ fontWeight: "bold", color: "#555e5e" }}>
            {league.tierRank.lp} LP{" "}
          </span>
          / {league.wins}W {league.losses}L
        </div>
        <div className="summoner-league-ratio">
          Win Ratio {calculateRatio(league.wins, totalGames)}%
        </div>
      </div>
    </div>
  );
};

export default SummonerLeagueContainer;
