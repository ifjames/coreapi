import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc', 
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

const MyImage = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Profile</Text>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/454713417_1551330795789543_4174493208429574415_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFXQvCCqd-Br7CIxkepCgHzvtfjNtDp16u-1-M20OnXq-mfU6-2wpKGmkXfmTy1NHb1kewADhodFdiRdqs0MfZX&_nc_ohc=-UNMIzIJ06oQ7kNvgHTrnZv&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=AWi9l156Kbg0Z0qgwSJpDSL&oh=00_AYA1tIkvl7Jh2Yrqqa9k-phLoAdEY97BuYATNVz3usceuQ&oe=6709A7E3',
        }}
      />
      <Text style={styles.name}>James Castillo</Text>
      <Text style={styles.description}>
        A BSIT student with passion for developing and studying for a brighter future to improve his lifestyle.
      </Text>
    </View>
  );
};

export default MyImage;
