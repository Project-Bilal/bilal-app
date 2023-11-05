import { View } from "react-native";
import React from "react";
import { Box, HStack, Pressable, Switch, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PrayerSettingsScreen({ navigation }) {
  const nav = useNavigation();
  return (
    <Box p="$2">
      <Pressable onPress={() => nav.goBack()}>
        <Ionicons name="md-chevron-down-outline" size={32} />
      </Pressable>
      <Text fontFamily="Inter-Black">PrayerSettingsScreen</Text>
      <HStack>
        <Text fontFamily="Inter-Light">Active</Text>
        <Switch />
      </HStack>
    </Box>
  );
}
