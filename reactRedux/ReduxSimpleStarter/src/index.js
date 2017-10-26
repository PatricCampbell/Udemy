import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/searchBar";

const API_KEY = "AIzaSyDR3tdSPywLlW5qIVC8rbi2EsH2NaBRFXE";

YTSearch({ key: API_KEY, term: "surfboards" }, data => {
  console.log(data);
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
