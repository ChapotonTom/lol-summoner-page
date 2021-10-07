import React from "react";
import SummonerChampions from "./components/SummonerChampions/SummonerChampions";
import SummonerLeagues from "./components/SummonerLeagues/SummonerLeagues";
import SummonerGames from "./components/SummonerGames/SummonerGames";

export const SummonerDetails = (props) => {
  const { summoner, summonerIsLoading } = props;

  if (summoner) {
    return (
      <div className="section pt-3">
        <div className="container p-3" style={{ width: "75%" }}>
          <div className="columns">
            <div
              className="column mr-3 mb-3 is-one-quarter"
              style={{ width: 300 }}
            >
              <SummonerLeagues
                summoner={summoner}
                summonerIsLoading={summonerIsLoading}
              />
              <SummonerChampions summoner={summoner} />
            </div>
            <div className="column pl-0">
              <SummonerGames summoner={summoner} />
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default SummonerDetails;
