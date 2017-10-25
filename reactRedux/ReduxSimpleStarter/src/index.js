import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/searchBar";

const API_KEY = "AIzaSyDR3tdSPywLlW5qIVC8rbi2EsH2NaBRFXE";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
