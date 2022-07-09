import { FC } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import Searchbar from "../../../components/searchbar";
import { Spacer } from "../../../components/spacer/spacer.component";
import SafeArea from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const SearchContainer = styled.View`
  background-color: green;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const RestaurantsScreen: FC = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item: any) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
