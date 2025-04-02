import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import Navigation from './src/Navigation/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
    <Provider store={store}>
      <Navigation />
    </Provider>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})








// import { useState } from 'react';
// import { View, Pressable } from 'react-native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';


// GoogleSignin.configure({
// 	webClientId: GOOGLE_WEB_CLIENT_ID,
// 	androidClientId: GOOGLE_ANDROID_CLIENT_ID,
// 	iosClientId: GOOGLE_IOS_CLIENT_ID,
// 	scopes: ['profile', 'email'],
// });

// const GoogleLogin = async () => {
// 	await GoogleSignin.hasPlayServices();
// 	const userInfo = await GoogleSignin.signIn();
// 	return userInfo;
// };

// export default function App() {
// 	const [error, setError] = useState('');
// 	const [loading, setLoading] = useState(false);

// 	const handleGoogleLogin = async () => {
// 		setLoading(true);
// 		try {
// 			const response = await GoogleLogin();
// 			const { idToken, user } = response;

// 			if (idToken) {
// 				const resp = await authAPI.validateToken({
// 					token: idToken,
// 					email: user.email,
// 				});
// 				await handlePostLoginData(resp.data);
// 			}
// 		} catch (apiError) {
// 			setError(
// 				apiError?.response?.data?.error?.message || 'Something went wrong'
// 			);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<View>
// 			<Pressable onPress={handleGoogleLogin}>Continue with Google</Pressable>
// 		</View>
// 	);
// }