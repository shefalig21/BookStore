import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
        <Text style={styles.footer}>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</Text>    
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        fontSize: 12,
        color: "white",
        textAlign: "center",
        backgroundColor:'black',
        padding:16,
      },
})








