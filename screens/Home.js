import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CharCard from "../shared/CharCard";
import { Entypo } from "@expo/vector-icons";
import { getAllCharacters } from "../functions";

const Home = ({ navigation }) => {
  const [characters, setcharacters] = useState();
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  const [url, seturl] = useState(
    "https://rickandmortyapi.com/api/character?page="
  );
  const [currentPage, setcurrentPage] = useState(1);
  const maxPage = 47;

  useEffect(() => {
    getAllCharacters(setcharacters, `${url}${currentPage}`);
  }, [currentPage]);

  const filteredCharacters = characters?.filter((char) =>
    char?.name.toLowerCase().includes(search?.toLowerCase())
  );
  if (characters) {
    return (
      <View className="w-full px-6 bg-white min-h-screen">
        <TextInput
          className="border-[1px] rounded-lg flex items-center justify-center p-4 text-[#494747] font-medium"
          placeholder="Filter by name..."
          onChangeText={(text) => setsearch(text)}
        />
        <View className="flex flex-row items-center justify-between mt-4">
          <View className="w-[45%] relative z-50">
            <View className="w-full h-10 rounded-lg border-[1px] border-[grey] flex-row items-center flex justify-between px-2 ">
              <Text className="font-medium">Species</Text>
              <Entypo name="chevron-small-down" size={24} color="black" />
            </View>
          </View>
          <View className="w-[45%] h-10 rounded-lg border-[1px] border-[grey] flex-row items-center flex justify-between px-2 ">
            <Text className="font-medium">Gender</Text>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </View>
        </View>
        <ScrollView className="mt-6 flex-1">
          {filteredCharacters?.length > 0 ? (
            filteredCharacters?.map((character) => (
              <CharCard
                key={character.id}
                name={character.name}
                type={character.species}
                image={character.image}
                action={() => navigation.navigate("Character", character)}
              />
            ))
          ) : (
            <View className="w-full flex flex-row justify-center mt-6">
              <Text className="text-lg font-bold">No Characters Found</Text>
            </View>
          )}
        </ScrollView>
        <View className="w-full flex flex-row h-40 mt-4 justify-around">
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
  } else {
    return (
      <View className="w-screen mt-40 flex justify-center items-center animate-spin">
        <Image
          className="animate-spin w-40 h-40"
          source={require("../assets/loading.png")}
        />
      </View>
    );
  }
};

export default Home;
