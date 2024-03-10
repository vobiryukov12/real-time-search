import { useContext } from "react";

import { SearchContext } from "../../context";
import { ISearchResultsProps } from "./SearchResults.props";

import { UserCard } from "../UserCard/UserCard";
import { Loader, ErrorMessage } from "../../UI";
import { EmptySearch } from "./EmptySearch/EmptySearch";

import "./SearchResults.scss";

export function SearchResults({
  loading,
  error,
  debouncedValue,
}: ISearchResultsProps) {
  const { users } = useContext(SearchContext);

  return (
    <div className="searchResults">
      {!loading && (
        <div className="usersList">
          {users?.map((user) => (
            <UserCard {...user} key={user.id} />
          ))}
        </div>
      )}

      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={error} />}

      {debouncedValue && users?.length === 0 && !loading && !error && (
        <EmptySearch searchQuery={debouncedValue} />
      )}
    </div>
  );
}
