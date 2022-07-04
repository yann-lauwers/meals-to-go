import { FC, useState } from "react";
import { Searchbar as CustomSearchBar } from "react-native-paper";

const Searchbar: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CustomSearchBar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default Searchbar;
