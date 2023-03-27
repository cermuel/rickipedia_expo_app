import { View, Text } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const AboutComp = ({ question, answer, action, isUrl }) => {
  return (
    <View className="w-full my-4">
      <View className="w-full mb-1 flex flex-row justify-between items-center">
        <Text className="text-lg font-bold">{question}</Text>
        {isUrl && action && (
          <Text className="ml-auto my-1" onPress={action}>
            <EvilIcons name="external-link" size={24} color="#737CDE" />
          </Text>
        )}
      </View>
      <Text>{answer}</Text>
    </View>
  );
};

export default AboutComp;
