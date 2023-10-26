import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const backgroundImage = require('./gallery/book.png'); // Replace with the path to your background image

const App = () => {
  const [bookList, setBookList] = useState([]);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  const handleAddBook = () => {
    if (name && genre && author && pages) {
      setBookList((prevList) => [
        {
          id: Math.random().toString(),
          name,
          genre,
          author,
          pages,
        },
        ...prevList,
      ]);

      // Clear input fields
      setName('');
      setGenre('');
      setAuthor('');
      setPages('');
    }
  };

  const handleDeleteBook = (bookId) => {
    setBookList((prevList) => prevList.filter((book) => book.id !== bookId));
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={{ color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
     }}>Library</Text>

        <TextInput
          placeholder="Title"
          value={name}
          onChangeText={(text) => setName(text)}
          style={{ marginBottom: 10, fontSize: 27 }}
        />

        <TextInput
          placeholder="Genre"
          value={genre}
          onChangeText={(text) => setGenre(text)}
          style={{ marginBottom: 10, fontSize: 27 }}
        />

        <TextInput
          placeholder="Author"
          value={author}
          onChangeText={(text) => setAuthor(text)}
          style={{ marginBottom: 10, fontSize: 27 }}
        />

        <TextInput
          placeholder="Number of Pages"
          value={pages}
          onChangeText={(text) => setPages(text)}
          keyboardType="numeric"
          style={{ marginBottom: 20, fontSize: 27 }}
        />

        <Button title="Add Book" onPress={handleAddBook} />

      

        <FlatList
          data={bookList.slice(0, 3)} // Limit to the first three entries
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingBottom: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 20, marginVertical: 20, backgroundColor: '#d52aa4', fontWeight: 'bold', color: 'black', }}>
                {item.name},  {item.genre}, {item.author},  {item.pages}
              </Text>
              <TouchableOpacity onPress={() => handleDeleteBook(item.id)}>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15 }}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

});

export default App;


