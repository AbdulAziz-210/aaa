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
import { image185, image500 } from "../api";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const UpcomingMovie = ({ upcoming, title }) => {
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <Text className="text-xl text-red-600 font-semibold">{title}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {upcoming.map((item, index) => (
          <TouchableWithoutFeedback
            key={item.id || index}
            onPress={() => {
              navigation.navigate("Movie", item.id);
            }}
          >
            <View className="space-y-1  items-center justify-center">
              <Image
                source={{ uri: image500(item.poster_path) }}
                className="rounded-3xl mr-5"
                style={{
                  width: width * 0.3,
                  height: height * 0.2
                }}
              />
              <Text className="text-white ">
                {item.original_title.length > 10
                  ? item.original_title.slice(0, 5) + "..."
                  : item.original_title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingMovie;

const styles = StyleSheet.create({});

//
//
//
//

// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Image,
//   Dimensions
// } from "react-native";
// import React from "react";
// import { image185 } from "../api";

// const { width, height } = Dimensions.get("window");

// const UpcomingMovie = ({ upcoming, title }) => {
//   return (
//     <View className="mb-8 space-y-4">
//       <Text className="text-xl text-red-600 font-semibold">{title}</Text>

//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{ paddingHorizontal: 15 }}
//       >
//         {upcoming.map((item) => (
//           <View className="space-y-1 mr-4 ">
//             <Image
//               source={{ uri: image185(item.poster_path) }}
//               className="rounded-3xl"
//               style={{ width: width * 0.3, height: height * 0.2 }}
//             />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default UpcomingMovie;

// const styles = StyleSheet.create({});
