import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import CastableDevicesScreen from "./screens/CastableDevicesScreen";
import AudioLibraryScreen from "./screens/AudioLibraryScreen";
import PrayerSettingsScreen from "./screens/PrayerSettingsScreen";
import AboutScreen from "./screens/AboutScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LocationScreen from "./screens/LocationScreen";

import { supabase } from "./lib/supabase";
import Auth from "./screens/auth";
import Account from "./screens/accounts";
import { Session } from "@supabase/supabase-js";
import { View } from "react-native";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
    /*
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
          mode="modal"
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
    </NavigationContainer>;*/
  );
}
