import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

// StatusBar.currentHeight only works for non ios devices
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
export default SafeArea;
