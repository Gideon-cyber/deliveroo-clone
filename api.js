import { client } from "./sanity";

export async function getCategories() {
  const categories = await client.fetch('*[_type == "category"]');
  return categories;
}

export const getFeaturedRestaurants = async () => {
  const featureRestaurants = await client.fetch(`*[_type == 'featured'] {
    ...,
    restaurants[] -> {
        ...,
        dishes[] -> {
            ...
        },
        type -> {
            name
        }
    }
  }`);
  return featureRestaurants;
};

// export const getCategories = () => {
//   return sanityQuery(`*[_type == 'category']`);
// };

export const getFeaturedRestaurantsById = async (id) => {
  const restaurants = client.fetch(
    `*[_type == 'featured' && _id == $id] {
        ...,
        restaurants[] -> {
            ...,
            dishes[] -> {
                ...
            },
            type -> {
                name
            }
        }
        
    }[0]`,
    { id }
  );

  return restaurants;
};
