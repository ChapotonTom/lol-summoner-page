import React, { useEffect, useState } from "react";
import "./summonerChampions.css";

import { getSummonerMostInfo } from "../../../../../../services/summoner";

import { calculateRatio } from "../../../../../../utils/calculateRatio";
import SummonerChampionsByWinRate from "./components/SummonerChampionsByWinRate";

export const SummonerChampions = (props) => {
  const { summoner } = props;

  const [sortByWinRate, setSortByWinRate] = useState(true);
  const [champions, setChampions] = useState([]);

  const processChampions = (champions, setter) => {
    let formattedChampions = champions.map((champion) => {
      champion.winRate = calculateRatio(champion.wins, champion.games);
      return champion;
    });
    formattedChampions = formattedChampions.sort(
      (a, b) => b.winRate - a.winRate
    );
    setter(formattedChampions);
  };

  useEffect(() => {
    if (summoner.name) {
      getSummonerMostInfo(summoner.name).then((result) => {
        processChampions(result.champions, setChampions);
      });
    }
  }, [summoner.name]);

  if (summoner) {
    return (
      <div className="summoner-champions-container">
        <div className="container columns">
          <div
            className={`column champion-tab-right summoner-champions-${
              sortByWinRate ? "tab-selected" : "tab"
            }`}
            onClick={() => setSortByWinRate(true)}
          >
            Champion Win Ratio
          </div>
          <div
            className={`column champion-tab-right summoner-champions-${
              sortByWinRate ? "tab" : "tab-selected"
            }`}
            onClick={() => setSortByWinRate(false)}
          >
            Rank win rate per week
          </div>
        </div>
        {champions.map((champion, index) => {
          return (
            <SummonerChampionsByWinRate
              key={champion.name + index}
              champion={champion}
              isLastElement={index === champions.length - 1}
            />
          );
        })}
      </div>
    );
  } else return <div></div>;
};

export default SummonerChampions;
