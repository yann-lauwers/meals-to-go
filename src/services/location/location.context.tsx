import { createContext, FC, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";
import { Keys, LocationTransformReturn } from "./location.types";

export const LocationContext = createContext<{
  location: LocationTransformReturn | null;
  isLoading: boolean;
  error: string | null;
  keyword: Keys;
  search: (value: Keys) => void;
}>({
  isLoading: false,
  error: null,
  location: null,
  search: () => null,
  keyword: "san francisco",
});

export const LocationContextProvider: FC = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState<Keys>("san francisco");

  const onSearch: (searchKeyword: Keys) => void = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // Don't do anything
      return;
    }
    locationRequest(keyword)
      .then(locationTransform)
      .then(setLocation)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
