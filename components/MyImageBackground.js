import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660489.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid'};

const MyImageBackground = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>BSIT3-2</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default MyImageBackground;