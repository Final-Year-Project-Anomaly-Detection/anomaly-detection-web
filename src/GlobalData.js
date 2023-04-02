import React, { createContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
const GlobalContext = createContext();

const GlobalData = (props) => {
  const [userDetails, setUserDetails] = useLocalStorage(
    "userDetails",
    {}
  );

  return (
    <GlobalContext.Provider
      value={{
        userDetails,
        setUserDetails,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalData, GlobalContext };
