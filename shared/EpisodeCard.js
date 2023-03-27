import { View, Text } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { truncate } from "../functions";

const EpisodeCard = ({ action, name, episode, date, mytruncate }) => {
  return (
    <View className="w-full p-2 my-2 rounded-sm border-[1px] ">
      <Text className="font-semibold text-[15px] my-1">
        Name:{" "}
        <Text className="font-normal">
          {mytruncate ? truncate(name, 15) : name}
        </Text>
      </Text>
      <Text className="font-semibold text-[15px] my-1">
        Episode:{" "}
        <Text className="font-normal">
          {mytruncate ? truncate(episode, 15) : episode}
        </Text>
      </Text>
      <Text className="font-semibold text-[15px] my-1">
        Air Date:{" "}
        <Text className="font-normal">
          {mytruncate ? truncate(date, 13) : date}
        </Text>
      </Text>
      <Text className="ml-auto my-1" onPress={action}>
        <EvilIcons name="external-link" size={24} color="#737CDE" />
      </Text>
    </View>
  );
};

export default EpisodeCard;
