import { View } from "react-native";
import React from "react";
import { Box, Center, HStack, Pressable, Switch, Text, VStack } from "@gluestack-ui/themed";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

export default function PrayerSettingsScreen({ route, navigation }) {
  const { prayerName } = route.params;
  const [reminderTime, setReminderTime] = React.useState(0);
  const [volume, setVolume] = React.useState(50);

  const reminderTimeDown = () => {
    if (reminderTime !== 0) setReminderTime(reminderTime - 5);
  };
  const reminderTimeUp = () => {
    if (reminderTime !== 30) setReminderTime(reminderTime + 5);
  };

  const volumeDown = () => {
    if (volume !== 10) setVolume(volume - 10);
  };
  const volumeUp = () => {
    if (volume !== 100) setVolume(volume + 10);
  };
  return (
    <Box p="$7">
      <Center>
        <Text py="$3" fontFamily="Inter-Regular" fontSize={24}>
          {prayerName}
        </Text>
      </Center>
      <Box borderRadius="$xl" py="$3" px="$5" bg="$white">
        <HStack justifyContent="space-between">
          <Text fontFamily="Inter-Regular">Active</Text>
          <Switch />
        </HStack>
      </Box>
      <VStack py="$5">
        <Text fontFamily="Inter-Black">Athan</Text>
        <Pressable onPress={() => navigation.navigate("AudioLibrary")}>
          <Box borderRadius="$xl" py="$5" bg="$white">
            <Center>
              <Text fontFamily="Inter-Regular">Select Athan</Text>
            </Center>
          </Box>
        </Pressable>
      </VStack>
      <VStack py="$3">
        <Box borderRadius="$xl" py="$5" bg="$white">
          <HStack justifyContent="space-between" px="$3">
            <Text fontFamily="Inter-Black" px="$2">
              Volume
            </Text>
            <VStack>
              <Text fontFamily="Inter-Regular">{volume === 0 ? "Off" : volume + "%"}</Text>
            </VStack>
            <Box bg="#F2F2F2" borderRadius={"$lg"}>
              <HStack>
                <Icons name="minus" size={32} onPress={() => volumeDown()} />
                <Text paddingTop="$1" size="md" fontFamily="Inter-Light">
                  |
                </Text>
                <Icons name="plus" size={32} onPress={() => volumeUp()} />
              </HStack>
            </Box>
          </HStack>
        </Box>
      </VStack>
      <VStack py="$5">
        <Text fontFamily="Inter-Black">Reminder</Text>
        <Box borderRadius="$xl" py="$5" bg="$white">
          <HStack justifyContent="space-between" px="$3">
            <Text fontFamily="Inter-Regular">{reminderTime === 0 ? "Off" : reminderTime + " min"}</Text>
            <Box bg="#F2F2F2" borderRadius={"$lg"}>
              <HStack>
                <Icons name="minus" size={32} onPress={() => reminderTimeDown()} />
                <Text paddingTop="$1" size="md" fontFamily="Inter-Light">
                  |
                </Text>
                <Icons name="plus" size={32} onPress={() => reminderTimeUp()} />
              </HStack>
            </Box>
          </HStack>
        </Box>
      </VStack>
      {reminderTime !== 0 && (
        <VStack py="$5">
          <Text fontFamily="Inter-Black">Reminder Sound</Text>
          <Pressable onPress={() => navigation.navigate("AudioLibrary")}>
            <Box borderRadius="$xl" py="$5" bg="$white">
              <Center>
                <Text fontFamily="Inter-Regular">Select Sound</Text>
              </Center>
            </Box>
          </Pressable>
        </VStack>
      )}
    </Box>
  );
}
