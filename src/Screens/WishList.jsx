import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../Components/Header';
import BookItem from '../Components/BookItem';
import { useSelector } from 'react-redux';

const Wishlist = ({ navigation }) => {
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
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
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.bookWrapper}>
            <BookItem book={item} />
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
    paddingHorizontal: 13,
    width: '100%',
    marginTop: 10,
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
    // paddingHorizontal: 4,
    paddingTop: 10,
  },
  bookWrapper: {
    width: '43%',
    marginBottom: 2,
    marginHorizontal: '3%', 
  },
});

export default Wishlist;

