import { Route } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RestaurantProps = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
  placeId: string;
};

type RestaurantStackParamList = {
  RestaurantsList: undefined;
  RestaurantDetails: { restaurant: RestaurantProps };
  Feed: { sort: "latest" | "top" } | undefined;
};

type RestaurantsScreenNavigationProp<T extends keyof RestaurantStackParamList> =
  {
    navigation: StackNavigationProp<RestaurantStackParamList, T>;
    route: Route<T, RestaurantStackParamList[T]>;
  };

export type {
  RestaurantStackParamList,
  RestaurantsScreenNavigationProp,
  RestaurantProps,
};
