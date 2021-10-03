import React, { useEffect, useState } from "react";
import "./summonerChampions.css";

import { getSummonerMostInfo } from "../../../../../../services/summoner";

import { calculateRatio } from "../../../../../../utils/calculateRatio";
import SummonerChampionsByWinRate from "./components/SummonerChampionsByWinRate";
import SummonerChampionsByWeekRate from "./components/SummonerChampionsByWeekRate";

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
        console.log(result);
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
            className={`column px-1 champion-tab-right summoner-champions-${
              sortByWinRate ? "tab" : "tab-selected"
            }`}
            onClick={() => setSortByWinRate(false)}
          >
            Rank win rate per week
          </div>
        </div>
        {sortByWinRate &&
          champions.map((champion, index) => {
            return (
              <SummonerChampionsByWinRate
                key={champion.name + index}
                champion={champion}
                isLastElement={index === champions.length - 1}
              />
            );
          })}
        {!sortByWinRate &&
          champions.map((champion, index) => {
            return (
              <SummonerChampionsByWeekRate
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
