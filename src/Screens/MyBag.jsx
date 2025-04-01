import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../Components/Header';
import CustomerModal from '../Components/CustomerModal';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../Redux/Actions/bagActions';

const MyBag = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { bagItems } = useSelector((state) => state.bag);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header bagItems={bagItems} navigation={navigation} />

        <View style={styles.outerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="black" style={styles.subHeaderImage} />
          </TouchableOpacity>
          <Text style={styles.header}>My Bag</Text>
        </View>

        {bagItems.map((book) => (
          <View key={book.id}>
            <View style={styles.itemContainer}>
              <Image source={book.image} style={styles.bookImage} />
              <View style={styles.detailsContainer}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.bookPrice}>Rs. {book.price}</Text>
                  <Text style={styles.oldPrice}>Rs. {book.oldPrice}</Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity style={styles.iconButton} onPress={() => handleDecrement(book.id)}>
                    <View style={[styles.circle, styles.redOutline]}>
                      <Icon name="remove" size={16} color="maroon" />
                    </View>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{book.quantity}</Text>

                  <TouchableOpacity style={styles.iconButton} onPress={() => handleIncrement(book.id)}>
                    <View style={[styles.circle, styles.maroonFill]}>
                      <Icon name="add" size={16} color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        ))}

        <View style={styles.customerContainer}>
          <View style={styles.innerCustomerContainer}>
            <Text style={styles.customerDetails}>Customer Details</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon name="add" size={24} color="black" style={styles.addIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <CustomerModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
        </View>
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmount}>
            Rs. {bagItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)}
          </Text>
        </View>
        <View style={styles.footerContent}>
          <TouchableOpacity style={styles.placeOrderButton} onPress={() => navigation.navigate("OrderScreen")}>
            <Text style={styles.placeOrderText}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  subHeaderImage: {
    marginRight: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 20,
    marginLeft: 5,
  },
  bookImage: {
    width: 80,
    height: 110,
    borderRadius: 2,
    marginRight: 12,
  },
  detailsContainer: {
    padding: 12,
  },
  bookTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 10,
    color: '#777',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  bookPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  oldPrice: {
    fontSize: 11,
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  iconButton: {
    padding: 8,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redOutline: {
    borderWidth: 1,
    borderColor: 'red',
  },
  maroonFill: {
    backgroundColor: 'maroon',
  },
  customerContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  innerCustomerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  customerDetails: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  addIcon: {
    marginLeft: 130,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmountContainer: {
    alignItems: 'flex-start',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'maroon',
  },
  footerContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  placeOrderButton: {
    backgroundColor: 'maroon',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  placeOrderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyBag;







