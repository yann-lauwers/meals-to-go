import { useContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { Keys } from "../../../services/location/location.mock";

const SearchContainer = styled.View`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  padding-top: 20px;
  top: 20px;
  right: 20px;
  left: 20px;
  position: absolute;
  z-index: 100;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder={"Search for a location"}
        icon="map"
        onChangeText={(text) => setSearchKeyword(text as Keys)}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword.toLowerCase() as Keys);
        }}
      />
    </SearchContainer>
  );
};
