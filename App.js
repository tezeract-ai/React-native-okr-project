import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './src/screens/RestaurantScreen';


// const Stack = CreateNativeStackNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-green-500">Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
