/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./summonerNameSearchInputBox.css";

import favoriteIconOn from "../../assets/images/icon-favorite-on.png";
import favoriteIconOff from "../../assets/images/icon-favorite-off.png";
import historyDeleteIcon from "../../assets/images/icon-history-delete.png";
import informationIcon from "../../assets/images/icon-history-info@2x.png";

const setNewSummonnersInStorage = (formattedSummoners) => {
  localStorage.setItem("summonersHistory", JSON.stringify(formattedSummoners));
};

const displayEmptyList = (isRecentSearchSelected) => {
  return (
    <div>
      <div>
        <img
          alt="information"
          src={informationIcon}
          style={{ with: 16, height: 16 }}
        />
      </div>
      {isRecentSearchSelected && (
        <div className="history-not-found-text">
          There is no summoner you seen recently.
        </div>
      )}
      {!isRecentSearchSelected && (
        <div className="history-not-found-text">
          Add your{" "}
          <img
            alt="favorite"
            src={favoriteIconOff}
            style={{ with: 16, height: 16 }}
          />{" "}
          favorite summoner for easy updates on the latest stats.
        </div>
      )}
    </div>
  );
};

export const SummonersNameSearchBox = (props) => {
  const { confirmSummonerSearch } = props;
  const [summoners, setSummoners] = useState([]);
  const [isRecentSearchSelected, setIsRecentSearchSelected] = useState(true);

  const setSummonersFromStorage = () => {
    const summonersHistory = JSON.parse(
      localStorage.getItem("summonersHistory") || "[]"
    );
    setSummoners(summonersHistory);
  };

  useEffect(() => {
    setSummonersFromStorage();
  }, []);

  const setFavoriteSummoner = (summonerName) => {
    const formattedSummoners = summoners.map((summoner) => {
      if (summoner.name === summonerName)
        summoner.isFavorite = !summoner.isFavorite;
      return summoner;
    });
    setNewSummonnersInStorage(formattedSummoners);
    setSummonersFromStorage();
  };

  const removeSummoner = (summonerName) => {
    let formattedSummoners = summoners;
    if (isRecentSearchSelected) {
      formattedSummoners = formattedSummoners.filter(
        (summoner) => summoner.name !== summonerName
      );
    } else {
      formattedSummoners = formattedSummoners.map((summoner) => {
        if (summoner.name === summonerName) summoner.isFavorite = false;
        return summoner;
      });
    }
    setNewSummonnersInStorage(formattedSummoners);
    setSummonersFromStorage();
  };

  const checkDisplayEmptyList = () => {
    if (
      (isRecentSearchSelected && summoners.length === 0) ||
      (!isRecentSearchSelected &&
        summoners.filter((summoner) => summoner.isFavorite).length === 0)
    ) {
      return displayEmptyList(isRecentSearchSelected);
    }
    return null;
  };

  return (
    <div className="summoner-searchbox-container pb-5">
      <div className="container columns m-0" style={{ minHeight: 40 }}>
        <div
          className={`column pt-2 summoner-searchbox-tab${
            isRecentSearchSelected ? "-selected" : ""
          }`}
          onClick={() => setIsRecentSearchSelected(true)}
        >
          Recent Search
        </div>
        <div
          className={`column pt-2 summoner-searchbox-tab${
            !isRecentSearchSelected ? "-selected" : ""
          }`}
          onClick={() => setIsRecentSearchSelected(false)}
        >
          Favorites
        </div>
      </div>
      <div className="container m-0 pt-5" style={{ minHeight: 40 }}>
        {checkDisplayEmptyList()}
        {summoners.map((summoner, index) => {
          if (!isRecentSearchSelected && !summoner.isFavorite) return null;
          return (
            <div
              key={summoner.name + index}
              className="container columns mx-0 summoner-search-element-container"
            >
              <div
                className="column pl-5 py-2 is-two-thirds"
                style={{ textAlign: "left" }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => confirmSummonerSearch(summoner.name)}
                >
                  {summoner.name}
                </span>
              </div>
              <div className="column py-2">
                <img
                  alt="favorite"
                  className="summoner-search-element-icon"
                  style={{
                    visibility: isRecentSearchSelected ? "visible" : "hidden",
                  }}
                  src={summoner.isFavorite ? favoriteIconOn : favoriteIconOff}
                  onClick={() => setFavoriteSummoner(summoner.name)}
                />
                <img
                  alt="delete"
                  className="summoner-search-element-icon"
                  src={historyDeleteIcon}
                  onClick={() => removeSummoner(summoner.name)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummonersNameSearchBox;
