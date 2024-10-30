import React from "react";
import AppContext from "./AppContext";

function AppState(props) {
  const data = 10;
  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
}

export default AppState;
