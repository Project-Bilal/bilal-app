import { Box } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";
import Geocoder from "react-native-geocoding";
import Constants from "expo-constants";
export default function LocationScreen({ navigation }) {
  Geocoder.init(process.env.EXPO_PUBLIC_GOOGLE_API_KEY);
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const handleGeocode = () => {
    if (address && address.trim().length > 0) {
      Geocoder.from(address)
        .then((json) => {
          if (json.results.length > 0) {
            setLatitude(json.results[0].geometry.location.lat);
            setLongitude(json.results[0].geometry.location.lng);
            setAddress(json.results[0].formatted_address);
          } else {
            alert("No results found for the given address");
          }
        })
        .catch((error) => {
          alert("bad address");
          console.error(error);
        });
    }
  };

  return (
    <Box p="$10">
      <TextInput
        autoCorrect={false}
        autoComplete="street-address"
        textContentType="fullStreetAddress"
        value={address}
        onChangeText={setAddress}
        placeholder="Home address"
        clearButtonMode="while-editing"
        inputMode="text"
      />
      <Button title="Geocode" onPress={() => handleGeocode()} />
      <View>
        <Text>Latitude: {latitude}</Text>
        <Text>Longitude: {longitude}</Text>
      </View>
    </Box>
  );
}
