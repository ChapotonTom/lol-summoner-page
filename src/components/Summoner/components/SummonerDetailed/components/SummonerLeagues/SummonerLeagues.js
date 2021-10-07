import React from "react";
import SummonerLeagueContainer from "./SummonerLeagueContainer";

export const SummonerLeagues = (props) => {
  const { summoner, summonerIsLoading } = props;

  if (summoner) {
    return (
      <div>
        {summoner.leagues.map((league) => {
          return (
            <SummonerLeagueContainer
              key={league.tierRank.name}
              league={league}
              summonerIsLoading={summonerIsLoading}
            />
          );
        })}
      </div>
    );
  } else return <div></div>;
};

export default SummonerLeagues;
