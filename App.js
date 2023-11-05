import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CastableDevicesScreen from "./screens/CastableDevicesScreen";
import AudioLibraryScreen from "./screens/AudioLibraryScreen";
import PrayerSettingsScreen from "./screens/PrayerSettingsScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};
export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={(route, navigation) => ({
            title: "Bilal",
          })}
        />
        <Stack.Screen name="CastableDevices" component={CastableDevicesScreen} />
        <Stack.Screen name="AudioLibrary" component={AudioLibraryScreen} />
        <Stack.Screen
          name="PrayerSettings"
          component={PrayerSettingsScreen}
          options={({ route, navigation }) => ({
            // animation: "slide_from_bottom",
            presentation: "modal",
            headerBackTitle: "Done",
            headerTitle: "Athan Settings",
            headerLargeTitleShadowVisible: false,
            headerShown: false,
          })}
        />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
