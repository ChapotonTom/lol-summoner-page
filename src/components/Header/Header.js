import React, { useState, useRef, useEffect } from "react";
import "./header.css";

import OPGGLOGO from "../../assets/images/op-gg-logo.svg";
import SummonersNameSearchBox from "./SummonersNameSearchBox";
import SummonerNameInputBox from "./SummonerNameInputBox";

export const Header = (props) => {
  const [summonerName, setSummonerName] = useState("");
  const [searchInputFocused, setSearchInputFocused] = useState(false);

  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
  }, []);
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSearchInputFocused(false);
    }
  };

  const handleSummonerNameInput = (name) => {
    setSummonerName(name);
  };

  const confirmSummonerSearch = (name) => {
    props.setSummonerName(name);
    setSummonerName("");
    setSearchInputFocused(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSummonerName("");
      confirmSummonerSearch(summonerName);
      e.target.blur();
    }
  };

  return (
    <div className="section header-container">
      <div className="container px-3" style={{ width: "75%" }}>
        <div className="level-right" ref={wrapperRef}>
          <div className="level-item">
            <div className="field has-addons">
              <div className="control has-icons-right" style={{ width: 260 }}>
                <input
                  className="input"
                  onFocus={() => setSearchInputFocused(true)}
                  type="text"
                  value={summonerName}
                  placeholder="Name1, Name2..."
                  onChange={(ev) => handleSummonerNameInput(ev.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div
                  className="icon is-right"
                  style={{ pointerEvents: "initial", cursor: "pointer" }}
                  onClick={() => confirmSummonerSearch(summonerName)}
                >
                  <img
                    alt="opgglogo"
                    src={OPGGLOGO}
                    className={"button-logo-opgg"}
                  />
                </div>
              </div>
            </div>
            {searchInputFocused && summonerName === "" && (
              <SummonersNameSearchBox
                confirmSummonerSearch={confirmSummonerSearch}
              />
            )}
            {searchInputFocused && summonerName !== "" && (
              <SummonerNameInputBox
                summonerName={summonerName}
                confirmSummonerSearch={confirmSummonerSearch}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
