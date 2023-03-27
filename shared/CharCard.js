import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CharCard = ({ image, action, name, type }) => {
  return (
    <TouchableOpacity onPress={action}>
      <View className="w-full rounded-lg h-80 border-dotted border-[#7070ce] border-[1px] my-2 z-30">
        <View className="w-full h-60 rounded-t-md">
          <Image
            source={{
              uri: image,
            }}
            className="w-full object-cover bg-cover h-full"
          />
        </View>
        <View className="h-20 w-full flex justify-center px-4">
          <Text className="text-lg font-medium">{name}</Text>
          <Text className="text-sm text-[#333333]">{type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharCard;
