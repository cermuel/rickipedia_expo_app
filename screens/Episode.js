import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CharactersCard from "../shared/CharactersCard";
import { getEpisode } from "../functions";
import axios from "axios";

const Episode = ({ navigation, route }) => {
  const { url } = route.params;
  const [episode, setepisode] = useState();
  const [error, seterror] = useState();
  const [character, setcharacter] = useState([]);

  useEffect(() => {
    getEpisode(url, setepisode, seterror);
  }, []);

  useEffect(() => {
    (async function () {
      let a = await Promise.all(
        episode?.characters?.map((x) => {
          return axios.get(x);
        })
      );
      setcharacter(a);
    })();
  }, [episode]);

  if (character && episode) {
    return (
      <View className="w-full mt-5">
        <Text className="w-full leading-none text-2xl text-center font-bold">
          Name: <Text className="text-[#737CDE]">{episode?.name}</Text>
        </Text>
        <Text className="w-full leading-none text-[#616060] text-lg text-center font-semibold">
          Episode: {episode?.episode}
        </Text>
        <Text className="w-full m-0 p-0 leading-none text-[#616060] text-lg text-center font-semibold">
          Air Date: {episode?.air_date}
        </Text>
        <ScrollView className="px-2 w-full mb-40">
          <View className="w-full flex flex-row  justify-around flex-wrap">
            {character?.map((character) => {
              return (
                <TouchableOpacity
                  className="w-[45%]"
                  onPress={() =>
                    navigation.navigate("Character", character?.data)
                  }
                >
                  <View className="w-full">
                    <CharactersCard
                      image={character?.data?.image}
                      name={character?.data?.name}
                      location={character?.data?.location?.name}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  } else if (error) {
    return (
      <View className="w-full mt-10">
        <Text className="text-center font-bold">An Error occured</Text>
        <Text>{error.message}</Text>
      </View>
    );
  } else {
    return (
      <View className="w-full mt-10">
        <Text className="text-center font-bold">Loading...</Text>
      </View>
    );
  }
};

export default Episode;
