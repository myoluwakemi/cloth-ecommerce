import { createContext, useState } from "react";

export const SeachProductContext = createContext({
  query: "",
  searchHandler: () => {},
});

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  const searchHandler = (query) => {
    setQuery(query);
  };
  const value = {
    query,
    searchHandler,
  };
  return (
    <SeachProductContext.Provider value={value}>
      {children}
    </SeachProductContext.Provider>
  );
};
