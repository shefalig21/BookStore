import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from "../Components/Header";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();

  return (

    <View style={styles.container}>

        <Header/>

      <View style={styles.successBox}>
        <Image source={require("../assets/images/Photo1.png")} style={styles.successIcon} />
        <Text style={styles.successText}>Order Placed Successfully</Text>
        <Text style={styles.orderText}>
          hurray!!! your order is confirmed the order id is #123456 save the order id for
          further communication..
        </Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LandingScreen")} >
        <Text style={styles.buttonText}>CONTINUE SHOPPING</Text>
      </TouchableOpacity>
    
      <View style={styles.contactBox}>
        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <Icon name="email" size={16} color="maroon" />
            <Text style={styles.contactText}> admin@bookstore.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="phone" size={16} color="maroon" />
            <Text style={styles.contactText}> +91 8163475881</Text>
          </View>
        </View>
        <View style={styles.locationRow}>
          <Icon name="location-on" size={16} color="maroon" />
          <Text style={styles.address}>
            42, 14th Main, 15th Cross, Sector 4, opp to BDA complex, near Kumarkom restaurant,
            HSR Layout, Bangalore 560034
          </Text>
        </View>
      </View>

      <View >
      <Text style={styles.footer}>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</Text>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // padding: 20,
  },
  successBox: {
    alignItems: "center",
    marginTop: 80,
  },
  successIcon: {
    width: 100,
    height: 100,
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  orderText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
    marginRight:25,
    marginLeft:26,
    marginBottom:40,

  },
  button: {
    backgroundColor: "maroon",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    marginLeft:17,
    marginRight:15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  contactBox: {
    marginTop: 150,
    width: "100%",
    backgroundColor:'#F5F5F5',
    padding:14,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft:10,
  },
  contactText: {
    fontSize: 14,
    marginLeft: 5,
  },
  locationRow: {
    marginTop:15,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:10,
  },
  address: {
    fontSize: 14,
    color: "black",
    marginLeft: 5,
    flex: 1,
  },
  footer: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    backgroundColor:'black',
    padding:16,
  },
});

export default OrderScreen;
