import React, { useState } from "react";
import "./header.css";

export const Header = (props) => {
  const [summonerName, setSummonerName] = useState("");

  const handleSummonerNameInput = (name) => {
    setSummonerName(name);
  };

  const confirmSummonerSearch = () => {
    props.setSummonerName(summonerName);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      confirmSummonerSearch();
    }
  };

  return (
    <div className="section header-container">
      <div className="level-right">
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="Name1, Name2..."
                onChange={(ev) => handleSummonerNameInput(ev.target.value)}
                onKeyDown={handleKeyDown}
              />
            </p>
            <p className="control">
              <button
                className="button button-input-gg"
                onClick={confirmSummonerSearch}
              >
                .GG
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
