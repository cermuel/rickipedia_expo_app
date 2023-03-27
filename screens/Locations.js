import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import LocationCard from "../shared/LocationCard";
import { getAllLocations } from "../functions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Locations = ({ navigation }) => {
  const [url, seturl] = useState(
    "https://rickandmortyapi.com/api/location?page="
  );
  const [width, setwidth] = useState("95%");
  const [currentPage, setcurrentPage] = useState(1);
  const [locations, setlocations] = useState();
  const maxPage = 7;

  useEffect(() => {
    getAllLocations(setlocations, `${url}${currentPage}`);
  }, [currentPage]);

  return (
    <View className="w-screen py-8">
      <TouchableOpacity
        className="absolute top-2 right-2"
        onPress={() => {
          if (width == "95%") {
            setwidth("47%");
          } else {
            setwidth("95%");
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
        Locations
      </Text>
      <ScrollView className="w-full h-[75vh]">
        <View className="flex flex-row px-2 justify-around flex-wrap">
          {locations?.map((location) => {
            return (
              <View className={`w-[${width}]`}>
                <LocationCard
                  key={location.id}
                  name={location.name}
                  dimension={location.dimension}
                  type={location.type}
                  action={() => {
                    navigation.navigate("Location", location);
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

export default Locations;
