/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { getSummonerMatches } from "../../../../../../services/match";
import SummonerGamesList from "./components/SummonerGamesList/SummonerGamesList";
import SummonerGamesSummary from "./components/SummonerGamesSummary/SummonerGamesSummary";

import { getItemInformation } from "../../../../../../services/item";

export const SummonerGames = (props) => {
  const { summoner } = props;

  const [gameTypeSelected, setGameTypeSelected] = useState("total");
  const [allGames, setAllGames] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (summoner.name) {
      getSummonerMatches(summoner.name).then((result) => {
        setGames(result.games);
        setAllGames(result.games);
      });
    }
  }, [summoner.name]);

  const [itemsDetails, setItemsDetails] = useState([]);

  useEffect(() => {
    getItemInformation().then((result) => setItemsDetails(result.data));
  }, []);

  useEffect(() => {
    const gameTypes = {
      solo: "Ranked Solo",
      flex: "Flex 5:5 Rank",
    };
    const gamesFiltered = allGames.filter((game) => {
      if (gameTypeSelected === "total") return game.gameType;
      else return game.gameType === gameTypes[gameTypeSelected];
    });
    setGames(gamesFiltered);
  }, [gameTypeSelected]);

  return (
    <div>
      <SummonerGamesSummary
        gameTypeSelected={gameTypeSelected}
        setGameTypeSelected={setGameTypeSelected}
      />
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
