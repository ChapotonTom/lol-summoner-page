import React from "react";
import SummonerLeagues from "./components/SummonerLeagues/SummonerLeagues";

export const SummonerDetails = (props) => {
  const { summoner } = props;

  if (summoner) {
    return (
      <div className="section pt-3">
        <div className="container p-3" style={{ width: "75%" }}>
          <div className="columns">
            <div className="column is-one-quarter">
              <SummonerLeagues summoner={summoner} />
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default SummonerDetails;
