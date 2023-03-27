import { View, Text } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { truncate } from "../functions";

const LocationCard = ({ action, name, type, dimension }) => {
  return (
    <View className="w-full p-2 my-2 rounded-sm border-[1px] ">
      <Text className="font-semibold text-[15px] my-1">
        Name: <Text className="font-normal">{truncate(name, 15)}</Text>
      </Text>
      <Text className="font-semibold text-[15px] my-1">
        Dimension:{" "}
        <Text className="font-normal">{truncate(dimension, 13)}</Text>
      </Text>
      <Text className="font-semibold text-[15px] my-1">
        Type: <Text className="font-normal">{truncate(type, 15)}</Text>
      </Text>
      <Text className="ml-auto my-1" onPress={action}>
        <EvilIcons name="external-link" size={24} color="#737CDE" />
      </Text>
    </View>
  );
};

export default LocationCard;
