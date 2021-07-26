import React from "react";
import { CookiesProvider } from "react-cookie";
import "./App.scss";

import GithubApp from "./components/GithubApp";

const App = () => {
  return (
    <CookiesProvider>
      <GithubApp title="GitHub Card App" />
    </CookiesProvider>
  )
};

export default App;
