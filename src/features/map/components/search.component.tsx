import { useContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import SafeArea from "../../../components/utility/safe-area.component";
import { LocationContext } from "../../../services/location/location.context";
import { Keys } from "../../../services/location/location.mock";

const SearchContainer = styled.View`
  top: 0px;
  right: 0px;
  left: 0px;
  position: absolute;
  z-index: 100;
`;

const SearchSubContainer = styled.View`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SafeArea>
        <SearchSubContainer>
          <Searchbar
            placeholder="Search for a location"
            icon="map"
            onChangeText={(text) => setSearchKeyword(text as Keys)}
            value={searchKeyword}
            onSubmitEditing={() => {
              search(searchKeyword.toLowerCase() as Keys);
            }}
          />
        </SearchSubContainer>
      </SafeArea>
    </SearchContainer>
  );
};
