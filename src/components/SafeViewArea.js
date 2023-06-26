import { SafeAreaView ,StatusBar , StyleSheet} from 'react-native'
import React from 'react'

export default function SafeViewArea({children}) {
  return (
    <SafeAreaView className='pl-3' style={styles.container}>
      {children}
    </SafeAreaView>
  )
  }

const styles= StyleSheet.create({
    container:{
      marginTop:StatusBar.currentHeight,
      flex:1
    }
})