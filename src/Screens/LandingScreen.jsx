import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../Components/Header';
import BookItem from '../Components/BookItem';
import BookModal from '../Components/BookModal';
import books from '../Data/booksData';
import Footer from '../Components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToBag } from '../Redux/Actions/bagActions';
import { addToWishlist } from '../Redux/Actions/wishlistActions';

const LandingScreen = ({ navigation }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { bagItems, wishlistItems } = useSelector((state) => ({
    bagItems: state.bag.bagItems,
    wishlistItems: state.wishlist.wishlistItems,
  }));

  const handleAddToBag = (book) => {
    dispatch(addToBag(book));
  };

  const handleAddToWishlist = (book) => {
    dispatch(addToWishlist(book));
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
      <Header navigation={navigation} bagItems={bagItems} wishlistItems={wishlistItems} />
      <Text style={styles.booksText}>Books</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.bookWrapper}>
            <BookItem
              book={item}
              addToBag={handleAddToBag}
              addToWishlist={handleAddToWishlist}
              isInBag={bagItems.some((bagItem) => bagItem.id === item.id)}
              isInWishlist={wishlistItems.some((wishlistItem) => wishlistItem.id === item.id)}
              onPress={() => openModal(item)}
            />
          </View>
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
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  bookWrapper: {
    flex: 1,
    marginHorizontal: 11,
    alignItems: 'center',
  },
});

export default LandingScreen;





