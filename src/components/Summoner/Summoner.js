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
  const insertChampion = {
    name: summoner.name,
    imageUrl: summoner.profileImageUrl,
    previousTier: `${summoner.previousTiers[0].tier} - ${summoner.previousTiers[0].lp}LP`,
    isFavorite: false,
  };
  if (isExisting >= 0) {
    summonersHistory.splice(isExisting, 1);
  }
  summonersHistory.unshift(insertChampion);
  if (summonersHistory.length > 8) {
    summonersHistory.splice(8, 1);
  }
  localStorage.setItem("summonersHistory", JSON.stringify(summonersHistory));
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
