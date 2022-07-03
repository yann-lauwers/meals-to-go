import { FC } from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { spacing } from "../../../utils/spacing";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: ${spacing.PADDING.base}px;
  color: red;
`;

const RestaurantInfoCard: FC<{ restaurant: any }> = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = ["https://picsum.photos/200/300"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Title>Card title</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});

export { RestaurantInfoCard };
