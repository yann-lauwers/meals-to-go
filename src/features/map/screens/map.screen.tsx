import { FC, useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen: FC = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);

  const viewport = location?.viewport;
  const lat = location?.lat || 0;
  const lng = location?.lng || 0;

  console.log(viewport);

  useEffect(() => {
    const northeastLat = viewport?.northeast.lat || 0;
    const southwestLat = viewport?.southwest.lat || 0;

    setLatDelta(northeastLat - southwestLat);
  }, [viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};
