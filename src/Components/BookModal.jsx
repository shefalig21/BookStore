import React from "react";
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BookModal = ({ visible, book, onClose }) => {
  if (!book) {
    return null;
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <View style={styles.closeIconContainer}>
              <Icon name="close" size={20} color="#fff" />
            </View>
          </TouchableOpacity>

          <View style={styles.bookInfoContainer}>
            <Image source={book.image} style={styles.bookImage} />
            <View style={styles.bookDetails}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>{book.author}</Text>
            </View>
          </View>

          <View style={styles.separator} />
          <Text style={styles.bookDescription}>{book.description}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default BookModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 16,
    width: "100%",
    maxHeight: "60%",
    alignItems: "flex-start",
  },
  closeButton: {
    position: "absolute",
    top: -45,
    alignSelf: "center",
  },
  closeIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "maroon",
    justifyContent: "center",
    alignItems: "center",
  },
  bookInfoContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  bookImage: {
    width: 70,
    height: 100,
    resizeMode: "cover",
    marginRight: 30,
  },
  bookDetails: {
    flex: 1,
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 16,
    marginBottom: 3,
  },
  bookAuthor: {
    fontSize: 11,
    color: "gray",
  },
  bookDescription: {
    fontSize: 12,
    color: "grey",
    marginTop: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
    width: "100%",
  },
});





















