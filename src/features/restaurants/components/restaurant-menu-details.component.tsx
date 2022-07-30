import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const RestaurantMenuDetails = () => {
  return (
    <ScrollView>
      <List.Section>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="food-croissant" />}
        >
          <List.Item title="Eggs" />
          <List.Item title="Bacon" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food-hot-dog" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Diner"
          left={(props) => (
            <List.Icon {...props} icon="food-drumstick-outline" />
          )}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="bottle-wine" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
