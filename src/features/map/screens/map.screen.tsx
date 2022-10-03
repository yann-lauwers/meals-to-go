import SafeArea from "../../../components/utility/safe-area.component";
import MapView from "react-native-maps";

export const MapScreen = () => {
  return (
    <SafeArea>
      <MapView style={{ height: "100%" }} />
    </SafeArea>
  );
};
