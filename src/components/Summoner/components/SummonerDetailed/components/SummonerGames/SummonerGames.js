import React, { useEffect, useState } from "react";

import { getSummonerMatches } from "../../../../../../services/match";
import SummonerGamesList from "./components/SummonerGamesList/SummonerGamesList";
import SummonerGamesSummary from "./components/SummonerGamesSummary";

export const SummonerGames = (props) => {
  const { summoner } = props;

  const [games, setGames] = useState([]);

  useEffect(() => {
    if (summoner.name) {
      getSummonerMatches(summoner.name).then((result) => {
        setGames(result.games);
      });
    }
  }, [summoner.name]);

  return (
    <div>
      <SummonerGamesSummary />
      <SummonerGamesList games={games} />
    </div>
  );
};

export default SummonerGames;
