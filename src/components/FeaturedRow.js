import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { RestaurantCard } from "./RestaurantCard";
import { getFeaturedRestaurantsById } from "../../api";
import { urlFor } from "../../sanity";

export function FeaturedRow({ id, title, description, featuredCategory }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getFeaturedRestaurantsById(id).then(({ restaurants }) => {
      setRestaurants(restaurants);
    });
  }, []);
  return (
    <View className="px-4">
      <View className="mt-4 flex-row items-center justify-between">
        <Text
          className="text-[16px] leading-4"
          style={{
            fontFamily: "InterSemiBold",
          }}
        >
          {title}
        </Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="text-gray-500 text-xs">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={
          {
            //   paddingHorizontal: 15,
          }
        }
        showsHorizontalScrollIndicator={false}
        className="pt-4 flex-row gap-4 px-4 mt-0"
      >
        {/*Restaurant Cards*/}
        {restaurants?.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={urlFor(restaurant.image).url()}
            title={restaurant?.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant?.address}
            short_description={restaurant.short_description}
            dishes={restaurant?.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
