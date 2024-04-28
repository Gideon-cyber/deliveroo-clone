import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] items-center justify-center">
      <Animatable.Image
        source={require("../../assets/truck.gif")}
        iterationCount={1}
        animation="slideInUp"
        className="w-96 h-[200px]"
      />
      <Animatable.Text
        iterationCount={1}
        animation="slideInUp"
        className="text-lg text-white my-10 text-center font-bold"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
