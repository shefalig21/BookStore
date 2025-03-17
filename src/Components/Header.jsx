import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navigation, bagItems = [], wishlistItems = [] }) => {
  console.log("Navigation prop in Header:", navigation);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftIcon}>
          <TouchableOpacity>
            <Image source={require('../assets/images/logo1.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.titleText}>Bookstore</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rightIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <Icon name="search" size={27} color="maroon" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Wishlist', { wishlistItems })}>
            <Icon name="favorite-outline" size={27} color="maroon" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyBag', { bagItems })}>
            <Icon name="shopping-cart" size={27} color="maroon" />
            {bagItems.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{bagItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    backgroundColor: 'white',
    borderColor: 'black',
    elevation: 25,
  },
  leftIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 26,
    height: 26,
    marginLeft: 5,
  },
  titleText: {
    color: 'maroon',
    marginLeft: 6,
    fontSize: 16,
    textAlign: 'center',
  },
  rightIcon: {
    flexDirection: 'row',
    gap: 18,
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
});










































// import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Header = ({ navigation, bagItems = [], wishlistItems = [] }) => {
//   console.log("Navigation prop in Header:", navigation);
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.leftIcon}>
//           <TouchableOpacity>
//             <Image source={require('../assets/images/logo1.png')} style={styles.image} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.titleText}>Bookstore</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.rightIcon}>
//           <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
//             <Icon name="search" size={27} color="maroon" />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => navigation.navigate('Wishlist', { wishlistItems })}>
//             <Icon name="favorite-outline" size={27} color="maroon" />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => navigation.navigate('MyBag', { bagItems })}>
//             <Icon name="shopping-cart" size={27} color="maroon" />
//             {bagItems.length > 0 && (
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>{bagItems.length}</Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 11,
//     backgroundColor: 'white',
//     borderColor: 'black',
//     elevation: 25,
//   },
//   leftIcon: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 26,
//     height: 26,
//     marginLeft: 5,
//   },
//   titleText: {
//     color: 'maroon',
//     marginLeft: 6,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   rightIcon: {
//     flexDirection: 'row',
//     gap: 18,
//   },
//   badge: {
//     position: 'absolute',
//     right: -6,
//     top: -6,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 12,
//   },
// });


