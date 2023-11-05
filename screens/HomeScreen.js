import { useCallback } from "react";
import { View } from "react-native";
import React from "react";
import { Box, GluestackUIProvider, VStack, HStack } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import PrayerBox from "../components/PrayerBox";
import { useFonts } from "expo-font";
import { PrayerNames, PrayerIcons } from "../utils/constants";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <GluestackUIProvider config={config}>
      <View onLayout={onLayoutRootView}>
        <Box py="$10">
          <VStack justifyContent="space-around" space="2xl">
            <HStack justifyContent="center" alignItems="space-around" space="xl">
              <PrayerBox prayerName={PrayerNames.F} icon={PrayerIcons.F} />
              <PrayerBox prayerName={PrayerNames.S} icon={PrayerIcons.S} />
            </HStack>
            <HStack justifyContent="center" alignItems="space-around" space="xl">
              <PrayerBox prayerName={PrayerNames.D} icon={PrayerIcons.D} />
              <PrayerBox prayerName={PrayerNames.A} icon={PrayerIcons.A} />
            </HStack>
            <HStack justifyContent="center" alignItems="space-around" space="xl">
              <PrayerBox prayerName={PrayerNames.M} icon={PrayerIcons.M} />
              <PrayerBox prayerName={PrayerNames.I} icon={PrayerIcons.I} />
            </HStack>
          </VStack>
        </Box>
      </View>
    </GluestackUIProvider>
  );
}
