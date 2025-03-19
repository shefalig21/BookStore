import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../Components/Header';
import BookItem from '../Components/BookItem';
import BookModal from '../Components/BookModal';
import books from '../Data/booksData';
import Footer from '../Components/Footer';

const LandingScreen = ({ navigation }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToBag = (book) => {
    setBagItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === book.id);
      if (itemExists) {
        return prevItems;
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  const addToWishlist = (book) => {
    setWishlistItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === book.id);
      if (itemExists) {
        return prevItems;
      }
      return [...prevItems, book];
    });
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} bagItems={bagItems} wishlistItems={wishlistItems ?? []} />
      <Text style={styles.booksText}>Books</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookItem
            book={item}
            addToBag={addToBag}
            addToWishlist={addToWishlist}
            isInBag={bagItems.some((bagItem) => bagItem.id === item.id)}
            isInWishlist={wishlistItems.some((wishlistItem) => wishlistItem.id === item.id)}
            onPress={() => openModal(item)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />

      <BookModal
        visible={modalVisible}
        book={selectedBook}
        onClose={closeModal}
      />

      <View style={{ marginTop: 30 }}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  booksText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 14,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 2,
  },
});

export default LandingScreen;


