import React from "react";
import { HStack, Center, Pressable, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

export default function PrayerBox({ prayerName, icon }) {
  const nav = useNavigation();
  return (
    <Pressable
      p="$10"
      height="$full"
      width="$2/5"
      rounded="$xl"
      hardShadow="$1"
      onPress={() => nav.navigate("PrayerSettings")}
      borderWidth="$.2"
      bg="$secondary200"
    >
      <Center>
        <HStack space="sm">
          <Icons name={icon} size={32} />
          <Text color="$black" fontFamily="Inter-Black" fontSize="$xl" py="$2">
            {prayerName}
          </Text>
        </HStack>
      </Center>
    </Pressable>
  );
}
