import React from "react";
import "../summonerChampions.css";

const getChampionKDA = (kills, assists, deaths) => {
  return ((kills + assists) / deaths).toFixed(2);
};

const getKDAStyle = (kda) => {
  if (kda >= 5) return "kda-orange";
  else if (kda >= 4) return "kda-blue";
  else if (kda >= 3) return "kda-green";
  else return "kda-normal";
};

export const SummonerChampionsByWinRate = (props) => {
  const { champion, isLastElement } = props;

  const championKDA = getChampionKDA(
    champion.kills,
    champion.assists,
    champion.deaths
  );

  return (
    <div
      className={`container columns py-1 summoner-champions-row ${
        isLastElement ? "last-champion-row" : ""
      }`}
    >
      <div className="column py-0 is-one-quarter">
        <img
          alt={champion.name}
          src={champion.imageUrl}
          className="summoner-champions-image"
        />
      </div>
      <div className="column pl-0 pr-1 is-one-quarter">
        <div className="summoner-champions-top-detail">{champion.name}</div>
        <div className="summoner-champions-bottom-detail">
          CS {champion.cs} (2.4)
        </div>
        <div></div>
      </div>
      <div className="column pl-0 ml-2 pr-1 is-3">
        <div
          className={`summoner-champions-top-detail ${getKDAStyle(
            championKDA
          )}`}
        >
          {championKDA}:1 KDA
        </div>
        <div className="summoner-champions-bottom-detail">
          {champion.kills} / {champion.assists} / {champion.deaths}
        </div>
      </div>
      <div className="column pl-0 pr-1 is-one-fifth">
        <div
          className={`summoner-champions-top-detail ${
            champion.winRate >= 60 ? "winRate-red" : ""
          }`}
        >
          {champion.winRate}%
        </div>
        <div className="summoner-champions-bottom-detail">
          {champion.games} Played
        </div>
      </div>
    </div>
  );
};

export default SummonerChampionsByWinRate;
