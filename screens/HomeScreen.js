import { useCallback } from "react";
import { SafeAreaView, View } from "react-native";
import React from "react";
import {
  Box,
  Divider,
  GluestackUIProvider,
  Center,
  VStack,
  HStack,
  Text,
  Pressable,
  Icon,
  EyeIcon,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import PrayerBox from "../components/PrayerBox";
import { useFonts } from "expo-font";
import { PrayerNames, PrayerIcons } from "../utils/constants";
import { getHijriDate } from "../utils/HijriDate";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
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
    <SafeAreaView onLayout={onLayoutRootView}>
      <GluestackUIProvider config={config}>
        <HStack flexDirection="row" alignItems="center">
          <Box flex={3} justifyContent="center" alignItems="center"></Box>
          <Text
            flex={2}
            justifyContent="center"
            alignItems="center"
            fontFamily="Inter-Black"
            fontSize={32}
            pt="$3"
          >
            Bilal
          </Text>
          <HStack flex={2} justifyContent="center" alignItems="center">
            <Icons name="radio" size={24} color="#737373" />
            <Text fontFamily="Inter-Light" fontSize={14}>
              Connected!
            </Text>
          </HStack>
        </HStack>
        <Center>
          <Text pt="$3" fontFamily="Inter-Light">
            {getHijriDate()}
          </Text>
        </Center>

        <Box py="$3">
          <VStack justifyContent="space-around" space="2xl">
            <HStack justifyContent="center" alignItems="space-around" space="xl">
              <PrayerBox
                title={PrayerNames.F}
                icon={PrayerIcons.F}
                description="5:33 AM"
                nav="PrayerSettings"
              />
              <PrayerBox
                title={PrayerNames.S}
                icon={PrayerIcons.S}
                description="7:01 AM"
                nav="PrayerSettings"
              />
            </HStack>
            <HStack justifyContent="center" alignItems="space-around" space="xl">
              <PrayerBox
                title={PrayerNames.D}
                icon={PrayerIcons.D}
                description="11:54 AM"
                nav="PrayerSettings"
              />
              <PrayerBox
                title={PrayerNames.A}
                icon={PrayerIcons.A}
                description="2:18 PM"
                nav="PrayerSettings"
              />
            </HStack>
            <HStack justifyContent="center" alignItems="space-around" space="xl">
              <PrayerBox
                title={PrayerNames.M}
                icon={PrayerIcons.M}
                description="4:44 PM"
                nav="PrayerSettings"
              />
              <PrayerBox
                title={PrayerNames.I}
                icon={PrayerIcons.I}
                description="6:11 PM"
                nav="PrayerSettings"
              />
            </HStack>
          </VStack>
        </Box>
        {/* <Divider /> */}
        <HStack justifyContent="center" py="$5">
          <Pressable
            width="$5/6"
            rounded="$xl"
            bg="$white"
            onPress={() => navigation.navigate("CastableDevices")}
          >
            <Center>
              <HStack py="$5" space="sm">
                <Icons name="google-home" size={32} color="#737373" />
                <Text fontFamily="Inter-Regular" fontSize="$xl" py="$2">
                  Google Speakers
                </Text>
              </HStack>
            </Center>
          </Pressable>
        </HStack>
        {/* <Divider /> */}
        <Box py="$3">
          <VStack justifyContent="space-around" space="2xl">
            <HStack justifyContent="center" alignItems="space-around" space="xl">
              <PrayerBox title="Madhab" icon="bookshelf" description="Standard" nav="PrayerSettings" />
              <PrayerBox title="Calculation" icon="calculator" description="ISNA" nav="PrayerSettings" />
            </HStack>
          </VStack>
        </Box>
        <VStack p="$3" justifyContent="flex-start">
          <Pressable onPress={() => navigation.navigate("Location")}>
            <HStack>
              <Icons name="navigation-variant" size={24} color="#737373" />
              <Text>Bothell, WA</Text>
            </HStack>
          </Pressable>
        </VStack>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
