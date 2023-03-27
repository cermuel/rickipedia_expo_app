import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import EpisodeCard from "../shared/EpisodeCard";
import { getAllEpisodes } from "../functions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Episodes = ({ navigation }) => {
  const [url, seturl] = useState(
    "https://rickandmortyapi.com/api/episode?page="
  );
  const [width, setwidth] = useState("95%");
  const [currentPage, setcurrentPage] = useState(1);
  const [episodes, setEpisodes] = useState();
  const maxPage = 7;
  const [truncate, settruncate] = useState(false);

  useEffect(() => {
    getAllEpisodes(setEpisodes, `${url}${currentPage}`);
  }, [currentPage]);

  return (
    <View className="w-screen py-8">
      <TouchableOpacity
        className="absolute top-2 right-2"
        onPress={() => {
          if (width == "95%") {
            setwidth("47%");
            settruncate(true);
          } else {
            setwidth("95%");
            settruncate(false);
          }
        }}
      >
        <MaterialCommunityIcons
          name="view-list-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Text className="w-full text-center text-xl text-[#737cde] font-bold">
        Episodes
      </Text>
      <ScrollView className="w-full h-[75vh]">
        <View className="flex flex-row px-2 justify-around flex-wrap">
          {episodes?.map((episode) => {
            return (
              <View className={`w-[${width}]`}>
                <EpisodeCard
                  key={episode.id}
                  name={episode.name}
                  date={episode.air_date}
                  episode={episode.episode}
                  mytruncate={truncate}
                  action={() => {
                    navigation.navigate("Episode", episode);
                  }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View className="w-full flex flex-row h-40 justify-around">
        <TouchableOpacity
          disabled={currentPage == 1}
          onPress={() => {
            setcurrentPage(currentPage - 1);
          }}
        >
          <View
            className={`w-20 flex items-center justify-center rounded-lg h-8 bg-[#737cde] border-[1px] border-[#737cde] ${
              currentPage == 1 && "opacity-25"
            }`}
          >
            <Text className="text-white font-medium">Prev</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={currentPage == maxPage}
          onPress={() => {
            setcurrentPage(currentPage + 1);
          }}
        >
          <View
            className={`w-20 flex items-center justify-center rounded-lg h-8 bg-[#737cde] border-[1px] border-[#737cde] ${
              currentPage == maxPage && "opacity-25"
            }`}
          >
            <Text className="text-white font-medium">Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Episodes;
