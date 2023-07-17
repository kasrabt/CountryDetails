import React, { useState } from "react";
import data from "./../data/data.json";
export const Context = React.createContext({
  conName: "",
  ConteintItems: [],
  items: [],
  addName: (txt) => {},
  addConteint: (contient) => {},
});

const ContextProvider = (props) => {
  const [allData, setAllData] = useState([]);
  const [conteintData, setConteintData] = useState([]);
  const [conName, setConanme] = useState("all");
  const addCName = (txt) => {
    setAllData(
      data.filter((item) => {
        return item.name.toLowerCase() === txt.toLowerCase();
      })
    );
  };
  const addConteintN = (c) => {
    setConteintData(
      data.filter((item) => {
        return item.region.toLowerCase() === c.toLowerCase();
      })
    );
    setConanme(c);
  };

  const Values = {
    conName: conName,
    ConteintItems: conteintData,
    items: allData,
    addName: addCName,
    addConteint: addConteintN,
  };

  return <Context.Provider value={Values}>{props.children}</Context.Provider>;
};

export default ContextProvider;
