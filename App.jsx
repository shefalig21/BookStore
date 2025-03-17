import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LandingScreen from './src/Screens/LandingScreen'
import MyBag from './src/Screens/MyBag'
import WishList from './src/Screens/WishList'
import Header from './src/Components/Header'
import Navigation from './src/Components/Navigation'
import OrderScreen from './src/Screens/OrderScreen'
import AuthScreen from './src/Auth/AuthScreen'


const App = () => {
  return (
    <View style={styles.container}>
      {/* <LandingScreen/> */}
      <Navigation/>
      {/* <OrderScreen/> */}
      {/* <MyBag/> */}

      {/* <AuthScreen/> */}

      {/* <Login/> */}

      {/* <Header/> */}

      {/* <WishList/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})



















































































const calculateTotal = () => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};