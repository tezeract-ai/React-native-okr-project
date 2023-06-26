import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoryCard'
import client, { urlFor } from "../../Sanity";


export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <ScrollView className="pt-3 pb-3 " horizontal showsHorizontalScrollIndicator={false}>

        {/* <CategoriesCard imgUrl={'https://links.papareact.com/gn7'}  title="testing"/>
        <CategoriesCard imgUrl={'https://links.papareact.com/gn7'}  title="testing"/>
        <CategoriesCard imgUrl={'https://links.papareact.com/gn7'}  title="testing"/>
        <CategoriesCard imgUrl={'https://links.papareact.com/gn7'}  title="testing"/>
        <CategoriesCard imgUrl={'https://links.papareact.com/gn7'}  title="testing"/>
        <CategoriesCard imgUrl={'https://links.papareact.com/gn7'}  title="testing"/> */}
        {categories.map((category) => (
        <CategoriesCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  )
}