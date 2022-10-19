import React, { useContext, useReducer, useEffect ,useState} from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const API = "https://api.tvmaze.com/search/shows?q=all";

const intialState = {
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
      localStorage.setItem('user',JSON.stringify(data))
    } catch (error) {
      console.log(error);
    }
  };


  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);


 

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};


export { AppProvider, useGlobalContext };
