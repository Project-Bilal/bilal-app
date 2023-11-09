import React from "react";
import { HStack, Center, Pressable, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

export default function PrayerBox({ title, description, icon, nav }) {
  const navigate = useNavigation();
  return (
    <Pressable
      p="$5"
      width="$2/5"
      rounded="$xl"
      bg="$white"
      onPress={() => navigate.navigate(nav, { prayerName: title })}
    >
      <Center>
        <HStack space="sm">
          <Icons name={icon} size={30} color="#737373" />
          <Text color="$black" fontFamily="Inter-Regular" fontSize="$xl" py="$2">
            {title}
          </Text>
        </HStack>
        <Text color="$black" fontFamily="Inter-Light" fontSize="$xl" py="$2">
          {description}
        </Text>
      </Center>
    </Pressable>
  );
}
