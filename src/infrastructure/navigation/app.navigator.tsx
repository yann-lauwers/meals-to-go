import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import SafeArea from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RouteNames } from "./navigator.types";
import { RestaurantsNavigator } from "./restaurants.navigator";

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Home!</Text>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
};

export const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
} as const;

const screenOptions: ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => BottomTabNavigationOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name as RouteNames];
  return {
    tabBarIcon: ({ size, color }: { size: any; color: any }) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

type BottomTabParamList = {
  Restaurants: undefined;
  Map: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
};
