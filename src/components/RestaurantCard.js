import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow-sm"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        alt="food"
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4 gap-1">
        <Text
          className="text-[14px] leading-[16px] pt-2"
          style={{
            fontFamily: "InterSemiBold",
          }}
        >
          {title}
        </Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={20} color="green" opacity={0.5} />
          <Text
            className="text-xs text-gray-500"
            style={{
              fontFamily: "InterRegular",
            }}
          >
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon size={20} color="gray" opacity={0.4} />
          <Text
            className="text-xs text-gray-500"
            style={{
              fontFamily: "InterRegular",
            }}
          >
            Nearby . {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
