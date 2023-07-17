import React, { useState, useEffect } from 'react';
import { getGenders } from '../repositories/movies';

export const GlobalContext = React.createContext({});
  const GlobalContextProvider = ({ children }) => {
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    getGenders().then((res) => {
      setGenders(res);
    });
    return () => {};
  }, []);

  return (
    <GlobalContext.Provider value={{ genders }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
