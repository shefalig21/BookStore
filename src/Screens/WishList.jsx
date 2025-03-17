
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../Components/Header';
import BookItem from '../Components/BookItem';

const Wishlist = ({ route, navigation }) => {
  const wishlistItems = route.params?.wishlistItems ?? [];

  return (
    <ScrollView>

    <View style={styles.container}>
      <Header navigation={navigation} /> 

      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.booksText}>Wishlist</Text>
      </View>

      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <BookItem book={item} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal:20,
    width: '100%',
    marginRight: '7%',
    marginTop:10,
  },
  backIcon: {
    marginRight: 5,
    alignSelf: 'center',
  },
  booksText: {
    fontSize: 22,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 3,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 2,
  },
});

export default Wishlist;

























































