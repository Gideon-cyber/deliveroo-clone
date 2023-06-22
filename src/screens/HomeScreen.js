import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView
      style={{ marginTop: StatusBar.currentHeight }}
      className="bg-white"
    >
      <View>
        {/*Header*/}
        <View className="flex-row items-center pb-3 space-x-2 mx-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full p-4"
          />
          <View className="flex-1">
            <Text className="font-bold text-xs text-gray-400">Deliver Now</Text>
            <Text className="font-bold text-xl ">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
