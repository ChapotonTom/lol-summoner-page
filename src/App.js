import React, { useState } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";

import { Header } from "./components/Header/Header";
import Summoner from "./components/Summoner/Summoner";

const App = () => {
  const [summonerName, setSummonerName] = useState("Roger");

  return (
    <div className="App">
      <Header setSummonerName={setSummonerName} />
      <Summoner summonerName={summonerName} />
    </div>
  );
};

export default App;
