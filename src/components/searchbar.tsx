import { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar as CustomSearchBar } from "react-native-paper";
import { spacing } from "../utils/spacing";

const Searchbar: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.searchContainer}>
      <CustomSearchBar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: { backgroundColor: "green", padding: spacing.PADDING.base },
});

export default Searchbar;
