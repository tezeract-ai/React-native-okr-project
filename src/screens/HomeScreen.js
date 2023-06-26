import 'react-native-url-polyfill/auto';
import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import SafeViewArea from '../components/SafeViewArea';
import { Image } from 'react-native';
// import { ChevronDownIcon } from 'react-native-heroicons/outline'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import client, { getPosts } from "../../Sanity";


const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    // const fetchData = async() => {
    //     client
    //     .fetch(
    //       `
    //     *[_type == "featured"] {
    //       ...,
    //       restaurants[]->{
    //         ...,
    //         dishes[] ->
    //       }
    //     }`
    //     )
    //     .then((data) => {
    //       setFeaturedCategories(data);
    //     })
    // }
    useEffect(() => {
        client
          .fetch(
            `
          *[_type == "featured"] {
            ...,
            restaurants[]->{
              ...,
              dishes[] ->
            }
          }`
          )
          .then((data) => {
            setFeaturedCategories(data);
          })
    },[])   

      


    return (
        <SafeViewArea>
            {/* HEADER */}
            <View className='flex-row items-center pt-1 pb-1  pr-4 justify-between bg-white'>
                <View className='flex-row gap-x-4 items-center' >
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }}
                        className="p-4 h-8 w-8 bg-gray-700 rounded-full"

                    />
                    <View>
                        <Text className="font-bold text-gray-400">Deliver now!</Text>
                        <Text className='font-bold text-xl'>Current Location</Text>
                    </View>
                </View>
                    <Icon5 name="user"  size={25} color="#00CCBB"/>
            </View>


            {/* Search */}
            <View className="flex-row bg-white pt-2 pb-2  pr-4 justify-between gap-x-4 items-center">
                <View className="flex-row gap-x-2 bg-gray-200 flex-1 pt-1 pb-1 items-center">
                    <Icon5 name="search"  size={20} color="gray"/>
                    <TextInput placeholder='resturants and cuisines' keyboardType='default' />
                </View>

                <Icon name="sliders"  size={25} color="#00CCBB"/>
            </View>


            {/* BODY */}
                <ScrollView>
                        
                    <Categories />

                    {/* <Featured title={"Offers near you!"} desc={"Why not support your local resturant tonight"}/>
                    <Featured title={"Tasty Discounts"} desc={"Why not enjoy best discounts and food"}/>
                    <Featured title={"Featured"} desc={"These are the best resturaunt you can find"}/> */}

                    {featuredCategories?.map((category) => (
          <Featured
            key={category._id}
            id={category._id}
            title={category.name}
            desc={category.short_description}
          />
        ))}
                </ScrollView>
        </SafeViewArea >
    )
}

export default HomeScreen