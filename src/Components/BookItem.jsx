import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BookItem = ({ book, addToBag, addToWishlist, isInBag, isInWishlist }) => {
  return (

    <View style={styles.bookContainer}>
      <View style={styles.imageContainer}>
        <Image source={book.image} style={styles.bookImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookAuthor}>{book.author}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.bookPrice}>Rs. {book.price}</Text>
          <Text style={styles.oldPrice}>Rs. {book.oldPrice}</Text>
        </View>
        <View style={styles.buttonActions}>
          {!isInBag && (
            <TouchableOpacity 
              style={styles.favIcon}
              onPress={() => addToWishlist(book)}
            >
              <Icon name={isInWishlist ? 'favorite' : 'favorite-border'} size={18} color="red" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.addToBag, isInBag && styles.addedToBag]}
            onPress={() => addToBag(book)}
            disabled={isInBag}
          >
            <Text style={styles.addToBagText}>{isInBag ? 'ADDED TO BAG' : 'ADD TO BAG'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 3,
    borderColor: 'lightgray',
    borderWidth: 1,
    overflow: 'hidden',
    width: '100%',
    marginRight: '10%',
    marginTop: 20,
  },
  imageContainer: {
    backgroundColor: '#F5F5F5',  
    padding: 10,
    alignItems: 'center',
  },
  bookImage: {
    width: 92,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 2,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 12,
  },
  bookTitle: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 10,
    color: '#777',
    marginTop: 1,
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
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  buttonActions: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10,
  },
  favIcon: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 1,
    marginRight: 8,
    padding: 6,
  },
  addToBag: {
    backgroundColor: 'maroon',
    paddingVertical: 9,
    paddingHorizontal: 8,
    borderRadius: 2,
    alignItems: 'center',
    flex: 1,
  },
  addedToBag: {
    backgroundColor: '#C09090',
    borderColor:'maroon',
    borderWidth:1,
  },
  addToBagText: {
    color: '#fff',
    fontSize: 13,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
});

export default BookItem;






































