import React from "react";

const Store = React.createContext({
  tweets: [
    "Tweet 1",
    "Tweet 2",
    "Tweet 3"
  ]
});

export default Store;
