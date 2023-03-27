import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ResidentsCard from "../shared/ResidentsCard";
import { getLocation, getResident } from "../functions";
import axios from "axios";

const Location = ({ navigation, route }) => {
  const { url } = route.params;
  const [location, setlocation] = useState();
  const [error, seterror] = useState();
  const [resident, setresident] = useState([]);

  useEffect(() => {
    getLocation(url, setlocation, seterror);
  }, []);

  useEffect(() => {
    (async function () {
      let a = await Promise.all(
        location?.residents?.map((x) => {
          return axios.get(x);
        })
      );
      setresident(a);
    })();
  }, [location]);

  if (resident && location) {
    return (
      <View className="w-full mt-5">
        <Text className="w-full leading-none text-2xl text-center font-bold">
          Location: <Text className="text-[#737CDE]">{location?.name}</Text>
        </Text>
        <Text className="w-full leading-none text-[#616060] text-lg text-center font-semibold">
          Dimension: {location?.dimension}
        </Text>
        <Text className="w-full m-0 p-0 leading-none text-[#616060] text-lg text-center font-semibold">
          Type: {location?.type}
        </Text>
        <ScrollView className="px-2 w-full mb-40">
          <View className="w-full flex flex-row  justify-around flex-wrap">
            {resident?.map((resident) => {
              console.log(resident?.data?.id);
              return (
                <TouchableOpacity
                  className="w-[45%]"
                  onPress={() =>
                    navigation.navigate("Character", resident?.data)
                  }
                >
                  <View className="w-full">
                    <ResidentsCard
                      image={resident?.data?.image}
                      name={resident?.data?.name}
                      location={resident?.data?.location?.name}
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

export default Location;
