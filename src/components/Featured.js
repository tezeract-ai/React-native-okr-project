import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ResturantCard from './ResturantCard';
import client from "../../Sanity";



export default function Featured({title,  desc, id}) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[] ->,
        type-> {
          name
        }
          },
        }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data.restaurants);
      });
  }, [id]);



  return (
    <View>
        <View  className="flex-row items-center justify-between pr-4 pt-3">
            <Text className="font-bold text-xl">{title}</Text>
            <Icon name="arrow-right" size={25} color="#00CCBB" />
        </View>

        <Text className="text-gray-400 text-sm">{desc}</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pt-3 pb-3" >
        {/* <ResturantCard
            key={'1'}
            id={'1'}
            imgUrl={"https://links.papareact.com/gn7"}
            title={"Nando's"}
            rating={4.8}
            genre={'American'}
            address={'sultan road'}
            short_description={'This is a test description'}
            dishes={[]}
            long={20}
            lat={0}
          /> */}

          {restaurants?.map((restaurant) => (
          <ResturantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
        </ScrollView>

    </View>
  )
}