import React, { useState, useRef, useEffect } from "react";
import "./header.css";

import OPGGLOGO from "../../assets/images/op-gg-logo.svg";
import SummonersNameSearchBox from "./SummonersNameSearchBox";

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
        <div className="level-right" ref={wrapperRef}>
          <div className="level-item">
            <div className="field has-addons">
              <div className="control has-icons-right" style={{ width: 260 }}>
                <input
                  className="input"
                  onFocus={() => setSearchInputFocused(true)}
                  type="text"
                  placeholder="Name1, Name2..."
                  onChange={(ev) => handleSummonerNameInput(ev.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div
                  className="icon is-right"
                  style={{ pointerEvents: "initial", cursor: "pointer" }}
                  onClick={() => confirmSummonerSearch()}
                >
                  <img
                    alt="opgglogo"
                    src={OPGGLOGO}
                    className={"button-logo-opgg"}
                  />
                </div>
              </div>
            </div>
            {searchInputFocused && (
              <SummonersNameSearchBox
                searchInputFocused={searchInputFocused}
                setSearchInputFocused={setSearchInputFocused}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
