import React from "react";
import "./App.css";

import MainBar from "./components/MainBar";

import { useRoutes } from "react-router-dom";

import routes from "./routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <div style={{ height: "100%", paddingBottom: "30px" }}>
      <MainBar />
      {routing}
    </div>
  );
}

export default App;
