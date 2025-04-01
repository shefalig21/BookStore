import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const handleSignUp = () => {
    if (!fullName || !email || !phoneNumber || !password) {
      Alert.alert('Error', 'All fields must be filled');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Invalid email');
      return;
    }
    if (phoneNumber.length !== 10) {
      Alert.alert('Error', 'Phone number must be exactly 10 digits');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }
    else {
      navigation.replace("LandingScreen");
    }
  };

  const navigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Book Shopping</Text>

      <Image source={require('../assets/images/Photo2.jpg')} style={styles.image} />

      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.toggleText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.toggleText, styles.activeToggleText]}>Signup</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />

      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.showPasswordText1}>{showPassword ? 'Hide' : 'Show'} Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    marginTop: 40,
    letterSpacing: 0.2,
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 20,
    borderRadius: 90,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  toggleText: {
    fontSize: 16,
    color: '#ccc',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  activeToggleText: {
    color: 'maroon',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'maroon',
  },
  input: {
    width: '85%',
    height: 45,
    borderColor: 'maroon',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginBottom: 16,
  },
  showPasswordText1: {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 230,
    marginBottom: 20,
  },
  button: {
    width: '85%',
    backgroundColor: 'maroon',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;