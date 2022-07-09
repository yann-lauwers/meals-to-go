import { FC, useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import SafeArea from "../../../components/utility/safe-area.component";
import { theme } from "../../../infrastructure/theme";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const LoadingContainer = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const RestaurantsScreen: FC = () => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator
            animating={true}
            color={theme.colors.brand.secondary}
          />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item: any) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
