import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import React from "react";
import { image185, image342, image500 } from "../api";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const TrendingMovie = ({ trending, title }) => {
  const navigation = useNavigation();

  return (
    <View className="mb-8 gap-5  space-y-4">
      <Text className="text-xl text-red-600 font-semibold">{title}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {trending.map((item, index) => (
          <TouchableWithoutFeedback
            key={item.id || index}
            onPress={() => navigation.navigate("Movie", item.id)}
            className="space-y-1 mr-4 items-center justify-center "
            style={{ width: width * 0.6 }}
          >
            <View className="items-center">
              <Image
                source={{ uri: image500(item.poster_path) }}
                className="rounded-3xl mb-2 mr-5"
                style={{ width: width * 0.6, height: height * 0.5 }}
              />
              <Text className="text-white ">
                {item.original_title.length > 10
                  ? item.title.slice(0, 20) + "..."
                  : item.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingMovie;

const styles = StyleSheet.create({});
/*





*/
// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const TrendingMovie = () => {
//   return (
//     <View className="mb-5 flex-1 items-center justify-center">
//       <Text className="items-center justify-center text-white text-xl mx-4 mb-5">
//         TrendingMovie
//       </Text>
//     </View>
//   );
// };

// export default TrendingMovie;

// const styles = StyleSheet.create({});
