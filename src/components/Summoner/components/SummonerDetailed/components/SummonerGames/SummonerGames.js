import React, { useEffect, useState } from "react";

import { getSummonerMatches } from "../../../../../../services/match";
import SummonerGamesList from "./components/SummonerGamesList/SummonerGamesList";
import SummonerGamesSummary from "./components/SummonerGamesSummary";

import { getItemInformation } from "../../../../../../services/item";

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

  const [itemsDetails, setItemsDetails] = useState([]);

  useEffect(() => {
    getItemInformation().then((result) => setItemsDetails(result.data));
  }, []);

  return (
    <div>
      <SummonerGamesSummary />
      <div className="container mt-3">
        {games.map((game) => {
          return (
            <SummonerGamesList
              key={game.gameId}
              game={game}
              itemsDetails={itemsDetails}
              summonerName={summoner.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SummonerGames;
