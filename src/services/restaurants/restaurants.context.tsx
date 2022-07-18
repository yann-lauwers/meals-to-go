import { createContext, FC, useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/location.context";
import { MocksKeys } from "./mock";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantContext = createContext<{
  restaurants: number[];
  isLoading: boolean;
  error: string | null;
}>({
  restaurants: [],
  error: null,
  isLoading: false,
});

export const RestaurantContextProvider: FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants: (loc: string) => void = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc as MocksKeys)
        .then(restaurantsTransform)
        .then(setRestaurants)
        .catch(setError)
        .finally(() => setIsLoading(false));
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location?.lat},${location?.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
