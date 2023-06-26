import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import { urlFor } from "../../Sanity";
import { useNavigation } from '@react-navigation/native';

export default function ResturantCard({imgUrl, title, rating, genre, address,short_description, id,dishes,long,lat}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={() => {
        navigation.navigate("Restaurants", {
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
        className="bg-white mr-3 shadow"
    >
        { imgUrl
        &&
          <Image 
            source={{
                uri:urlFor(imgUrl).url(),
            }}
            className="h-36 w-64 rounded-sm"
        />}
        
              <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Icon name="star" size={22} color="green" />

          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          {/* <Icon5 name="location-pen" size={25} color="gray" /> */}
          <Text className="text-xs text-gray-500">Nearby . {address?.substring(0,20)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}