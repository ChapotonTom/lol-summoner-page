/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./summonerNameSearchInputBox.css";

export const SummonerNameInputBox = (props) => {
  const { summonerName, confirmSummonerSearch } = props;
  const [summoners, setSummoners] = useState([]);
  const [summonersFiltered, setSummonersFiltered] = useState([]);

  useEffect(() => {
    const summonersHistory = JSON.parse(
      localStorage.getItem("summonersHistory") || "[]"
    );
    setSummoners(summonersHistory);
    setSummonersFiltered(summonersHistory);
  }, []);

  useEffect(() => {
    let allSummoners = summoners;
    if (allSummoners.length === 0) {
      allSummoners = JSON.parse(
        localStorage.getItem("summonersHistory") || "[]"
      );
    }
    const summonersMatching = allSummoners.filter((summoner) =>
      summoner.name.startsWith(summonerName)
    );
    setSummonersFiltered(summonersMatching);
  }, [summonerName]);

  if (!summonersFiltered.length) return null;
  return (
    <div className="summoner-inputbox-container pb-5">
      <div className="container m-0 pt-5" style={{ minHeight: 40 }}>
        {summonersFiltered.map((summoner, index) => {
          const unmatchingString = summoner.name.replace(summonerName, "");
          const matchingString = summoner.name.replace(unmatchingString, "");
          return (
            <div
              key={summoner.name + index}
              className="container columns is-mobile mx-0 summoner-search-input-element-container"
              onClick={() => confirmSummonerSearch(summoner.name)}
            >
              <div className="column pl-5 py-2 is-one-third summoner-search-icon">
                <img
                  alt="summoner-icon"
                  className="summoner-search-input-element-icon"
                  src={summoner.imageUrl}
                />
              </div>
              <div className="column py-2 pl-0 summoner-search-input-summoner">
                <div className="summoner-search-input-summoner-name">
                  <span style={{ color: "#c6443e" }}>{matchingString}</span>
                  <span>{unmatchingString}</span>
                </div>
                <div className="summoner-search-input-summoner-details">
                  {summoner.previousTier}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummonerNameInputBox;
