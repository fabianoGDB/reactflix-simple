import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <main>
      <div className="pattern">A</div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="" />
          <h1>
            Find <span className="text-gradient">Movies</span> You will enjoy
          </h1>
        </header>

        <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      </div>
    </main>
  );
};

export default App;
