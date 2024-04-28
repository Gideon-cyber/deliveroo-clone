import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { Categories, FeaturedRow } from "../components";
import sanityClient from "../../sanity";
import { getCategories } from "../../sanity";
import "react-native-url-polyfill/auto";
import { getFeaturedRestaurants } from "../../api";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getFeaturedRestaurants().then((categories) => {
      setFeaturedCategories(categories);
    });
  }, []);

  return (
    <SafeAreaView
      // style={{ marginTop: StatusBar.currentHeight }}
      className="bg-white"
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/*Header*/}
      <View className="flex-row items-center pb-3 space-x-2 mx-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full p-4"
        />
        <View className="flex-1">
          <Text
            className="text-xs text-gray-400"
            style={{
              fontFamily: "InterSemiBold",
            }}
          >
            Deliver Now
          </Text>
          <View className="flex-row items-center space-x-1">
            <Text
              className="text-[16px] leading-5"
              style={{
                fontFamily: "InterBold",
              }}
            >
              Current Location
            </Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/*Search*/}
      <View className="flex-row items-center pb-3 space-x-2 mx-4">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200">
          <View className="flex-1 flex-row items-center space-x-2 px-3 py-2">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              className="text-gray-400 flex-1"
              style={{
                fontFamily: "InterRegular",
              }}
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            ></TextInput>
          </View>
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>

      {/*Body*/}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/*Categories*/}
        <Categories />

        {/*Featured */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category?._id}
            id={category?._id}
            title={category?.name}
            description={category?.short_description}
            featuredCategory="featured"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
