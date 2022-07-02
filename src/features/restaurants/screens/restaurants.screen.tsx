import { FC } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import Searchbar from "../../../components/searchbar";
import { spacing } from "../../../utils/spacing";
import { RestaurantInfo } from "../components/restaurant.components";

const isAndroid = Platform.OS === "android";

const RestaurantsScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar />
      <View style={styles.listContainer}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  listContainer: {
    backgroundColor: "blue",
    flex: 1,
    padding: spacing.PADDING.base,
  },
});

export default RestaurantsScreen;
