import { Dimensions } from "react-native";
const fourbythreeRatio = () => {
  const { height, width } = Dimensions.get("window");
  console.log("width", width);
  console.log("height", height);
  return {};
};

export { fourbythreeRatio };
