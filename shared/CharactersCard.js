import { View, Text, Image } from "react-native";
import React from "react";
import { truncate } from "../functions";

const CharactersCard = ({ image, name, location }) => {
  return (
    <View className="border-[1px] mt-4 border-[#737cde] w-full h-80 rounded-xl">
      <Image
        source={{
          uri: image,
        }}
        className="rounded-t-xl w-full h-[70%]"
      />
      <View className="w-full h-[30%] px-4 py-2 flex justify-between">
        <Text className="font-bold text-base text-[black]">
          {truncate(name, 15)}
        </Text>
        <View className="flex">
          <Text className="font-medium text-xs text-[#333333]">
            Last location
          </Text>
          <Text className="font-light text-xs text-[#333333]">{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default CharactersCard;
