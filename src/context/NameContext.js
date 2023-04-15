import React, { createContext, useState } from "react";
export const NameCxt = createContext();

NameCxt.displayName = "name provider";
const NameContextProvider = (props) => {
  const [name] = useState("mohamed");
  const value = { name };
  return <NameCxt.Provider value={value}>{props.children}</NameCxt.Provider>;
};

export default NameContextProvider;
