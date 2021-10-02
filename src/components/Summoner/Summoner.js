import React, { useEffect, useState } from "react";
import { SummonerProfile } from "./components/SummonerProfile/SummonerProfile";

import { getSummonerBasicInfo } from "../../services/summoner";
import SummonerDetails from "./components/SummonerDetailed/SummonerDetails";

export const Summoner = (props) => {
  const { summonerName } = props;

  const [summoner, setSummoner] = useState();

  useEffect(() => {
    if (summonerName) {
      getSummonerBasicInfo(summonerName).then((result) => {
        setSummoner(result.summoner);
      });
    }
  }, [summonerName]);

  useEffect(() => {
    if (summoner) {
      console.log(summoner);
    }
  }, [summoner]);
  return (
    <div>
      <SummonerProfile summoner={summoner} />
      <SummonerDetails summoner={summoner} />
    </div>
  );
};

export default Summoner;
