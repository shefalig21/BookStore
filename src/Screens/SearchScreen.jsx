import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import books from '../Data/booksData';
import BookItem from '../Components/BookItem';

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);

    if (text.trim() === '') {
      setFilteredBooks([]);
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(text.toLowerCase()) ||
        book.author.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={27} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search books..."
          value={searchText}
          onChangeText={handleSearch}
          autoFocus
        />
      </View>

      {searchText.length > 0 && filteredBooks.length === 0 && (
        <Text style={styles.noResults}>No results found</Text>
      )}

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
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
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  bookContainer: {
    width: '45%',
    marginBottom: 2,
    marginHorizontal: '3%',
  },
});

export default SearchScreen;
