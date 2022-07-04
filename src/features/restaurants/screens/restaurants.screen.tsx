import { FC } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import Searchbar from "../../../components/searchbar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const RestaurantListContainer = styled.View`
  background-color: blue;
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const SearchContainer = styled.View`
  background-color: green;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen: FC = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
