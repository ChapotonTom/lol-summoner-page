import React from "react";
import "./summonerProfile.css";

import levelBox from "../../../../assets/images/bg-levelbox.png";

export const SummonerProfile = (props) => {
  const { summoner } = props;

  if (summoner) {
    return (
      <div className="section py-4 px-5 summoner-profile-containers">
        <div className="container" style={{ width: "75%" }}>
          <div className="container summoner-previous-tiers-containers">
            {summoner.previousTiers.map((tier) => {
              return (
                <div
                  key={tier.season}
                  className="summoner-previous-tiers-element"
                >
                  <span style={{ fontWeight: "bold" }}>S{tier.season}</span>{" "}
                  {tier.tier}
                </div>
              );
            })}
          </div>
          <div className="container columns pt-5">
            <div className="column is-2" style={{ width: 145, marginLeft: 30 }}>
              <div className="summoner-profile-picture-container">
                <img
                  alt="profilePicture"
                  src={summoner.profileImageUrl}
                  style={{ width: 100, visibility: "hidden" }}
                />
                <img
                  alt="profilePicture"
                  src={summoner.profileImageUrl}
                  className="summoner-profile-picture"
                />
                <img
                  src={summoner.profileBorderImageUrl}
                  alt="profilePictureBorder"
                  className="summoner-profile-picture-border"
                />
                <div>
                  <img
                    alt="summoner-league-pic"
                    className="img_levelbox"
                    src={levelBox}
                  />
                  <div className="summoner-profile-level">{summoner.level}</div>
                </div>
              </div>
            </div>
            <div className="column pl-0 summoner-profile-description">
              <div className="summoner-profile-name">{summoner.name}</div>
              <div className="summoner-profile-ladder">
                Ladder Rank
                <span style={{ fontWeight: "bold" }}>
                  {` ${summoner.ladderRank.rank.toLocaleString()} `}
                </span>
                ( {summoner.ladderRank.rankPercentOfTop}% of top )
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div className="section summoner-profile-container"></div>;
};

export default SummonerProfile;
