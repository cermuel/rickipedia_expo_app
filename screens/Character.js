import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import InfoCard from "../shared/InfoCard";
import { getSingleCharacter } from "../functions";

const Character = ({ route, navigation }) => {
  const { id } = route.params;
  const [character, setcharacter] = useState();
  const [error, seterror] = useState();
  useEffect(() => {
    getSingleCharacter(setcharacter, seterror, id);
  }, [id]);
  if (character) {
    return (
      <ScrollView>
        <View className="flex items-center py-8 px-4">
          <Image
            source={{
              uri: character.image,
            }}
            className="w-36 h-36 rounded-full"
          />
          <View className="flex w-full">
            <Text className="text-xl text-[#8E8E93] font-medium">
              Informations
            </Text>
            <View className="flex w-full px-4">
              <InfoCard title={"Name"} text={character.name} />
              <InfoCard title={"Gender"} text={character.gender} />
              <InfoCard title={"Status"} text={character.status} />
              <InfoCard title={"Species"} text={character.species} />
              <InfoCard
                title={"Location"}
                text={character.location.name}
                action={() => {
                  navigation.navigate("Location", character.location);
                }}
              />
            </View>
          </View>
          {/* <View className="flex w-full mt-8">
            <Text className="text-xl text-[#8E8E93] font-medium">Episodes</Text>
            <View className="flex w-full px-4">
              <InfoCard
                title={"S01E01"}
                text={"Pilot"}
                date={"December 2, 2013"}
                action={() => {
                  alert("Clicked");
                }}
              />
              <InfoCard
                title={"S01E02"}
                text={"Episode 2"}
                date={"December 8, 2013"}
                action={() => {
                  alert("Clicked");
                }}
              />
              <InfoCard
                title={"S01E03"}
                text={"Pilot"}
                date={"December 2, 2013"}
                action={() => {
                  alert("Clicked");
                }}
              />
            </View>
          </View> */}
        </View>
      </ScrollView>
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

export default Character;
