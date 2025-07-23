import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import React from "react";
import { image185, image342, image500 } from "../api";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const TopRatedMovie = ({ toprated, title }) => {
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <Text className="text-xl text-red-600 font-semibold">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {toprated.map((item, index) => (
          <TouchableWithoutFeedback
            key={item.id || index}
            onPress={() => navigation.navigate("Movie", item.id)}
            className="space-y-1 mr-4 items-center justify-center "
            style={{ width: width * 0.7 }}
          >
            <View className="items-center">
              <Image
                source={{ uri: image500(item.poster_path) }}
                className="rounded-3xl mb-2 mr-5"
                style={{ width: width * 0.7, height: height * 0.5 }}
              />
              <Text className="text-white ">
                {item.original_title.length > 10
                  ? item.title.slice(0, 15) + "..."
                  : item.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopRatedMovie;

const styles = StyleSheet.create({});
