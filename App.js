import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as LocalAuth from "expo-local-authentication";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Character from "./screens/Character";
import Episode from "./screens/Episode";
import Location from "./screens/Location";
import Locations from "./screens/Locations";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import Episodes from "./screens/Episodes";
import About from "./screens/About";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const options = ({ navigation }) => ({
  headerRight: () => {
    return (
      <View className="px-4">
        <FontAwesome
          name="navicon"
          onPress={() => navigation.toggleDrawer()}
          size={24}
          className="text-[#737CDE]"
          color="#737CDE"
        />
      </View>
    );
  },
});

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen name="Character" component={Character} options={options} />
      <Stack.Screen name="Location" component={Location} options={options} />
    </Stack.Navigator>
  );
}

function EpisodeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Episodes" component={Episodes} options={options} />
      <Stack.Screen name="Episode" component={Episode} options={options} />
      <Stack.Screen name="Character" component={Character} options={options} />
    </Stack.Navigator>
  );
}

function LocationStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Locations" component={Locations} options={options} />
      <Stack.Screen name="Location" component={Location} options={options} />
      <Stack.Screen name="Character" component={Character} options={options} />
    </Stack.Navigator>
  );
}

function AboutStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={options} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen
        name="Characters"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Episodes"
        component={EpisodeStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Locations"
        component={LocationStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    const result = LocalAuth.authenticateAsync();
  }, []);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
