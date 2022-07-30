import { FC, useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import SafeArea from "../../../components/utility/safe-area.component";
import { theme } from "../../../infrastructure/theme";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Search } from "../components/search.component";
import {
  RestaurantProps,
  RestaurantsScreenNavigationProp,
} from "./restaurants.types";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`` as unknown as typeof FlatList;

const LoadingContainer = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const RestaurantsScreen: FC<
  RestaurantsScreenNavigationProp<"RestaurantsList">
> = ({ navigation }) => {
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
        <RestaurantList<RestaurantProps>
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item: any) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
