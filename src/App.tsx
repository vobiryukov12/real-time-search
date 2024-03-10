import { useState } from "react";

import { useFetchData, useOnline } from "./hooks";
import { SearchContext } from "./context";

import { SearchForm, SearchResults } from "./components";
import { NoInternet } from "./UI";

import "./App.scss";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [users, loading, error, debouncedValue] = useFetchData(inputValue);

  const isOnline = useOnline();

  const onChangeInput = (value: string) => {
    setInputValue(value);
  };

  return (
    <SearchContext.Provider value={{ users }}>
      <div className="app">
        {!isOnline && <NoInternet />}

        <SearchForm onChangeInput={onChangeInput} />

        {debouncedValue && (
          <SearchResults {...{ loading, error, debouncedValue }} />
        )}
      </div>
    </SearchContext.Provider>
  );
}
