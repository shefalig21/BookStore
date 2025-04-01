// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const isValidEmail = (email) => {
//         return email.includes('@') && email.includes('.');
//       };

//   const handleLogin = () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'All fields must be filled');
//       return;
//     }
//     if (!isValidEmail(email)) {
//       Alert.alert('Error', 'Invalid email');
//       return;
//     }
//     if (password.length < 6) {
//       Alert.alert('Error', 'Password must be at least 6 characters');
//       return;
//     }
//     navigation.replace("LandingScreen");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Online Book Shopping</Text>
//       <Image source={require('../assets/images/Photo2.jpg')} style={styles.image} />

//       <TextInput 
//       style={styles.input} 
//       placeholder="Email" 
//       value={email} 
//       onChangeText={setEmail} 
//       />

//       <TextInput 
//       style={styles.input} 
//       placeholder="Password" 
//       value={password} 
//       onChangeText={setPassword} 
//       secureTextEntry={!showPassword} 
//       />

//       <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//         <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'} Password</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//         <Text style={styles.toggleText}>Don't have an account? Signup</Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// export default LoginScreen;



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields must be filled');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Invalid email');
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

  const navigateToSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Book Shopping</Text>

      <Image source={require('../assets/images/Photo2.jpg')} style={styles.image} />

      <View style={styles.toggleContainer}>
        <TouchableOpacity>
          <Text style={[styles.toggleText, styles.activeToggleText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.toggleText}>Signup</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />

      <View style={styles.showPasswordForgotContainer}>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'} Password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.rowButtons}>
        <TouchableOpacity style={styles.altButton}>
          <Text style={styles.buttontext}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.altButton1}>
          <Text style={styles.buttontext1}>Google</Text>
        </TouchableOpacity>
      </View>
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
  showPasswordForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  showPasswordText: {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 12,
  },
  forgotPasswordText: {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 13,
  },
  dividerContainer: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  rowButtons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  altButton: {
    flex: 1,
    backgroundColor: 'blue',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  altButton1: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttontext1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
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

export default LoginScreen;