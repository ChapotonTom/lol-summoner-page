import React, { useState } from "react";
import "./header.css";

import OPGGLOGO from "../../assets/images/op-gg-logo.svg";

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
      <div className="container px-3" style={{ width: "75%" }}>
        <div className="level-right">
          <div className="level-item">
            <div className="field has-addons">
              <div className="control has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Name1, Name2..."
                  onChange={(ev) => handleSummonerNameInput(ev.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div
                  className="icon is-right"
                  style={{ pointerEvents: "initial", cursor: "pointer" }}
                >
                  <img
                    alt="opgglogo"
                    src={OPGGLOGO}
                    className={"button-logo-opgg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
