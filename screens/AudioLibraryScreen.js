import { View, ScrollView } from "react-native";
import React from "react";
import { Audio } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { Box, Button, ButtonIcon, ButtonText, Divider, HStack, VStack, Text } from "@gluestack-ui/themed";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AudioLibraryScreen() {
  const [athans, setAthans] = React.useState([]);
  const [playing, setPlaying] = React.useState();
  const [sound, setSound] = React.useState();

  const resetPlaying = (playbackStatus) => {
    if (playbackStatus.didJustFinish) setPlaying(null);
  };

  async function playSound(value) {
    setPlaying(value);
    const source = {
      uri: `https://storage.googleapis.com/athans/${value}`,
    };
    const { sound } = await Audio.Sound.createAsync(source, null, resetPlaying);
    setSound(sound);
    await sound.playAsync();
  }

  async function stopSound() {
    sound.unloadAsync();
    setSound(null);
    setPlaying(null);
  }

  async function toggleSound(value) {
    if (sound && value === playing) {
      stopSound();
    } else if (sound) {
      sound.unloadAsync().then(playSound(value));
    } else {
      playSound(value);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        sound && sound.unloadAsync();
      };
    }, [sound])
  );

  useFocusEffect(
    React.useCallback(() => {
      const source = axios.CancelToken.source();
      const url = "https://us-central1-project-bilal-338505.cloudfunctions.net/get-athans";
      const fetchAthans = async () => {
        try {
          const response = await axios.get(url, { cancelToken: source.token });
          setAthans(Object.values(response.data));
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Data fetching cancelled");
          } else {
            // Handle error
          }
        }
      };
      fetchAthans();
      setPlaying(null);

      return () => {};
    }, [])
  );

  return (
    <ScrollView>
      {athans.length === 0 && (
        <Box>
          <Text loading>Loading...</Text>
        </Box>
      )}
      <VStack space="md" p="$5">
        {athans.map((a, i) => {
          return (
            <Box borderWidth="$.2" borderRadius="$xl" key={i} bg="$amber100">
              <Button py="$2">
                <HStack>
                  <Icons
                    name={playing !== a.value ? "play" : "pause"}
                    color="cornflowerblue"
                    size={48}
                    onPress={() => toggleSound(a.value)}
                  />
                  <VStack>
                    <ButtonText fontFamily="Inter-Regular">{a.desc}</ButtonText>
                    <ButtonText fontFamily="Inter-Light">{a.type}</ButtonText>
                  </VStack>
                </HStack>
              </Button>
            </Box>
          );
        })}
      </VStack>
    </ScrollView>
  );
}
