import React from 'react';
import { ImageBackground, StyleSheet, Button, View } from 'react-native';

const image = require('./home.png');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imageBackground} resizeMode="cover">
        <View style={styles.buttonCont}>
          <Button title="Proceed" onPress={() => navigation.navigate('Details')} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center' // This may not be visible if ImageBackground covers the whole screen
  },
  imageBackground: {
    flex: 1,// Ensure ImageBackground covers the whole screen
    justifyContent: 'flex-end', // Align children (the button container) to the bottom
  },
  buttonCont: {
    alignItems: 'center', // Center-align children horizontally
    marginBottom: 30, // Optionally, add some margin at the bottom
  },
});

export default HomeScreen;
