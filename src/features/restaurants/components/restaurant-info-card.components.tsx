import { FC } from "react";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Address,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
  Title,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard: FC<{ restaurant: any }> = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "https://picsum.photos/200/300",
    photos = ["https://picsum.photos/200/300"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((rate) => (
              <SvgXml key={rate} width="20" height="20" xml={star} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Spacer position="left" size="large">
                <Text variant="error">CLOSED TEMPORARILY</Text>
              </Spacer>
            )}
            {isOpenNow && (
              <Spacer position="left" size="large">
                <SvgXml width="20" height="20" xml={open} />
              </Spacer>
            )}
            <Spacer position="left" size="large">
              <Icon key={icon} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export { RestaurantInfoCard };
