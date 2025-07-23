import { StatusBar } from "expo-status-bar";
import { React, useEffect, useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  fetchPopularMoview,
  fetchTopRatedMovie,
  fetchTrendingMovie,
  fetchUpcomingMovie
} from "../api";
import TrendingMovie from "../components/trending-movie";
import UpcomingMovie from "../components/upcoming-movie";
import TopRatedMovie from "../components/top-rated-movie";
import PopularMovie from "../components/popular-movie";
import Loader from "../components/loader";
import ProgressLoader from "../components/progress-loader";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovie();
    getUpcomingMovie();
    getTopRatedMovie();
    getPopularMovie();
  }, []);

  const getTrendingMovie = async () => {
    const data = await fetchTrendingMovie();
    data.results && setTrending(data.results);
    setIsLoading(false);
  };

  const getUpcomingMovie = async () => {
    const data = await fetchUpcomingMovie();
    data.results && setUpcoming(data.results);
  };

  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    data.results && setTopRated(data.results);
  };

  const getPopularMovie = async () => {
    const data = await fetchPopularMoview();
    data.results && setPopular(data.results);
  };

  return (
    <View className="flex-1  bg-slate-900">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 border-b-2 border-white pb-4 ">
          <Image source={require("../../assets/images/logo.png")} />

          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 50 }}
          className="mx-4"
        >
          {trending.length > 0 && (
            <TrendingMovie trending={trending} title={"Trending Movie"} />
          )}
          {upcoming.length > 0 && (
            <UpcomingMovie upcoming={upcoming} title={"Upcoming movie"} />
          )}
          {/* {popular.length > 0 && (
            <UpcomingMovie upcoming={popular} title={"Popular movie"} />
          )} */}
          {topRated.length > 0 && (
            <TopRatedMovie toprated={topRated} title={"topRated "} />
          )}
        </ScrollView>
      )}
    </View>
  );
}
