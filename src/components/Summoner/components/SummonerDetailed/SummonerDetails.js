import React from "react";
import SummonerChampions from "./components/SummonerChampions/SummonerChampions";
import SummonerLeagues from "./components/SummonerLeagues/SummonerLeagues";
import SummonerGames from "./components/SummonerGames/SummonerGames";

export const SummonerDetails = (props) => {
  const { summoner } = props;

  if (summoner) {
    return (
      <div className="section pt-3">
        <div className="container p-3" style={{ width: "75%" }}>
          <div className="columns">
            <div className="column is-one-quarter" style={{ width: 300 }}>
              <SummonerLeagues summoner={summoner} />
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
