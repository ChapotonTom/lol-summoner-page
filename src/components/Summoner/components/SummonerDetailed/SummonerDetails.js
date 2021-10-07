import React from "react";
import SummonerChampions from "./components/SummonerChampions/SummonerChampions";
import SummonerLeagues from "./components/SummonerLeagues/SummonerLeagues";
import SummonerGames from "./components/SummonerGames/SummonerGames";

export const SummonerDetails = (props) => {
  const { summoner, summonerIsLoading } = props;

  if (summoner) {
    return (
      <div className="section pt-3">
        <div className="container is-max-widescreen p-3">
          <div className="columns">
            <div className="column mb-3 is-one-third">
              <SummonerLeagues
                summoner={summoner}
                summonerIsLoading={summonerIsLoading}
              />
              <SummonerChampions summoner={summoner} />
            </div>
            <div className="column">
              <SummonerGames summoner={summoner} />
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default SummonerDetails;
