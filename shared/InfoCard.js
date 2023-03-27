import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const InfoCard = ({ title, text, action, date }) => {
  return (
    <View className="py-4 border-b-[1px] border-[#d2d1d1] flex flex-row justify-between items-center">
      <View>
        <Text className="text-base font-bold text-[#081F32]">{title}</Text>
        <Text className="text-[#6E798C]">{text}</Text>
        {date && (
          <Text className="text-[#8E8E93] text-[10px] font-medium">{date}</Text>
        )}
      </View>
      {action && (
        <Entypo
          name="chevron-small-right"
          onPress={action}
          size={24}
          color="black"
        />
      )}
    </View>
  );
};

export default InfoCard;
