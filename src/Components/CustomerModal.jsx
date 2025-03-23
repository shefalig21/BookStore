import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomerModal = ({ modalVisible, setModalVisible }) => {
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [Address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandMark] = useState('');
  const [type, setType] = useState('Home');

  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default CustomerModal;










