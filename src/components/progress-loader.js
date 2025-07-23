import { View, Dimensions } from "react-native";
// import React from "react";
import * as Progress from "react-native-progress";

const { width, height } = Dimensions.get("window");

const ProgressLoader = () => {
  return (
    <View
      style={{ width: width, height: height }}
      className="absolute flex-row justify-center items-center"
    >
      <Progress.Circle size={30} indeterminate={true} />
    </View>
  );
};

export default ProgressLoader;
