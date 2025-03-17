import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../Components/Header';


const MyBag = ({ route, navigation }) => {

  const { bagItems } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [Address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandMark] = useState('');
  const [type, setType] = useState('Home');
  const [items, setItems] = useState(bagItems);

  const incrementQuantity = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header bagItems={items} navigation={navigation} />

        <View style={styles.outerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="black" style={styles.subHeaderImage} />
          </TouchableOpacity>
          <Text style={styles.header}>My Bag</Text>
        </View>

        {items.map((book) => (
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
                  <TouchableOpacity style={styles.iconButton} onPress={() => decrementQuantity(book.id)}>
                    <View style={[styles.circle, styles.redOutline]}>
                      <Icon name="remove" size={16} color="maroon" />
                    </View>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{book.quantity}</Text>

                  <TouchableOpacity style={styles.iconButton} onPress={() => incrementQuantity(book.id)}>
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Icon name="close" size={24} color="#fff" />
              </TouchableOpacity>

              <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.modalHeadingText}>Customer Details</Text>
                <TextInput 
                placeholder="Name" 
                placeholderTextColor="black" 
                value={name} 
                onChangeText={setName} 
                style={styles.input} 
                />
                <TextInput 
                placeholder="Phone number" 
                placeholderTextColor="black" 
                value={phone} 
                keyboardType="numeric" 
                onChangeText={setPhone} 
                style={styles.input} 
                />
                <TextInput 
                placeholder="Enter Pincode" 
                placeholderTextColor="black" 
                value={pincode} 
                onChangeText={setPincode} 
                style={styles.input} 
                />
                <TextInput 
                placeholder="Locality"
                 placeholderTextColor="black" 
                 value={locality} 
                 onChangeText={setLocality} 
                 style={styles.input} 
                 />
                <TextInput 
                placeholder="Address" 
                placeholderTextColor="black" 
                value={Address} 
                onChangeText={setAddress} 
                style={styles.inputAddress} 
                />
                <TextInput 
                placeholder="City/Town" 
                placeholderTextColor="black" 
                value={city} 
                onChangeText={setCity} 
                style={styles.input} 
                />
                <TextInput 
                placeholder="Landmark" 
                placeholderTextColor="black" 
                value={landmark} 
                onChangeText={setLandMark} 
                style={styles.input}
                 />

                <Text style={styles.typeHeading}>Type</Text>
                <View style={styles.radioGroup}>
                  {['Home', 'Work', 'Other'].map((option) => (
                    <TouchableOpacity key={option} style={styles.radioOption} onPress={() => setType(option)}>
                      <Icon name={type === option ? "radio-button-checked" : "radio-button-unchecked"} size={20} color="maroon" />
                      <Text style={styles.radioText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </ScrollView>

      <View style={styles.footer}>
      <View style={styles.totalContainer}>
      <Text style={styles.totalLabel}>Total</Text>
      </View>
     <View style={styles.totalAmountContainer}>
      <Text style={styles.totalAmount}>
      Rs. {items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)}
      </Text>
      </View>
      <View style={styles.footerContent}>

      <TouchableOpacity style={styles.placeOrderButton} 
      onPress={() => navigation.navigate("OrderScreen")}>
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    maxHeight: '60%',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  closeButton: {
    position: 'absolute',
    top: -45,
    right: 10,
    backgroundColor: 'maroon',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
  },
  scrollView: {
    marginTop: 40,
    paddingBottom: 20
  },
  modalHeadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'gray'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 14
  },
  inputAddress: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 14,
    height: 80
  },
  typeHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioText: {
    marginLeft: 5,
    fontSize: 16
  },
  addButton: {
    backgroundColor: 'maroon',
    padding: 16,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
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














