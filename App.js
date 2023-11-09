import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import CastableDevicesScreen from "./screens/CastableDevicesScreen";
import AudioLibraryScreen from "./screens/AudioLibraryScreen";
import PrayerSettingsScreen from "./screens/PrayerSettingsScreen";
import AboutScreen from "./screens/AboutScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LocationScreen from "./screens/LocationScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ route, navigation }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="CastableDevices"
          component={CastableDevicesScreen}
          options={({ route, navigation }) => ({
            presentation: "modal",
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="AudioLibrary"
          component={AudioLibraryScreen}
          options={({ route, navigation }) => ({
            presentation: "modal",
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="PrayerSettings"
          component={PrayerSettingsScreen}
          options={({ route, navigation }) => ({
            presentation: "modal",
            headerShown: false,
          })}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={({ route, navigation }) => ({
            presentation: "modal",
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={({ route, navigation }) => ({
            presentation: "modal",
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
