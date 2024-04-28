import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import { Image } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../store/features/restaurantSlice";

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 p-2 bg-gray-50 rounded-full shadow-2xl w-fit"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-2xl" style={{ fontFamily: "InterSemiBold" }}>
              {title}
            </Text>
            <View className="flex-row items-center space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={20} color="green" />
                <Text
                  className="text-gray-500 text-[12px] leading-[16px]"
                  style={{ fontFamily: "InterRegular" }}
                >
                  <Text
                    className="text-green-500 text-[12px] leading-[16px]"
                    style={{ fontFamily: "InterRegular" }}
                  >
                    {rating}
                  </Text>{" "}
                  . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={20} color="gray" opacity={0.4} />
                <Text
                  className="text-gray-500 text-[12px] leading-[16px]"
                  style={{ fontFamily: "InterRegular" }}
                >
                  Nearby . {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4 text-[14px]">
              {short_description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300 p-4">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text
              className="pl-2 flex-1"
              style={{
                fontFamily: "InterSemiBold",
              }}
            >
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>

        <View className="bg-gray-100 pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* DishRow */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
