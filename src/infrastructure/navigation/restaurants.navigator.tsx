import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantStackParamList } from "../../features/restaurants/screens/restaurants.types";

const RestaurantStack = createStackNavigator<RestaurantStackParamList>();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        options={({ route }) => ({
          headerShown: true,
          headerMode: "screen",
          headerBackTitleVisible: false,
          title: route.params.restaurant.name,
        })}
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
