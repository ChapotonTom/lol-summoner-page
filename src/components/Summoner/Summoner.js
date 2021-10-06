import React, { useEffect, useState } from "react";
import { SummonerProfile } from "./components/SummonerProfile/SummonerProfile";

import { getSummonerBasicInfo } from "../../services/summoner";
import SummonerDetails from "./components/SummonerDetailed/SummonerDetails";

const insertSummonerInHistory = (summoner) => {
  const summonersHistory = JSON.parse(
    localStorage.getItem("summonersHistory") || "[]"
  );
  const isExisting = summonersHistory.findIndex(
    (summonerHistory) => summonerHistory.name === summoner.name
  );
  if (isExisting < 0) {
    const insertChampion = {
      name: summoner.name,
      imageUrl: summoner.profileImageUrl,
      previousTier: `${summoner.previousTiers[0].tier} - ${summoner.previousTiers[0].lp}LP`,
      isFavorite: false,
    };
    summonersHistory.unshift(insertChampion);
    localStorage.setItem("summonersHistory", JSON.stringify(summonersHistory));
  }
};

export const Summoner = (props) => {
  const { summonerName } = props;

  const [summoner, setSummoner] = useState();

  useEffect(() => {
    if (summonerName) {
      getSummonerBasicInfo(summonerName).then((result) => {
        insertSummonerInHistory(result.summoner);
        setSummoner(result.summoner);
      });
    }
  }, [summonerName]);
  return (
    <div>
      <SummonerProfile summoner={summoner} />
      <SummonerDetails summoner={summoner} />
    </div>
  );
};

export default Summoner;
