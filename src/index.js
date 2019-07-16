import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import { usePersistedContext, usePersistedReducer } from "./usePersist";

import Store from "./context";
import reducer from "./reducer";

import Show_Tweet from "./components/Show_Tweet";
import Create_Tweet from "./components/Create_Tweet";

function App() {
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" 
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Create_Tweet />
      <Show_Tweet />
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
