import { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { Keys } from "../../../services/location/location.mock";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder={"Search for a location"}
        onChangeText={(text) => setSearchKeyword(text as Keys)}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword.toLowerCase() as Keys);
        }}
      />
    </SearchContainer>
  );
};
