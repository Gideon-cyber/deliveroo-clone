import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryCard } from "./CategoryCard";
import { urlFor } from "../../sanity";
import { getCategories } from "../../api";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/*Category card*/}
      {categories.map((category, index) => (
        <View key={index}>
          <CategoryCard
            imgUrl={urlFor(category.image).url()}
            title={category.name}
          />
        </View>
      ))}
    </ScrollView>
  );
};
