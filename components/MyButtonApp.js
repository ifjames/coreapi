import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const MyButtonApp = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Buttons</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View style={styles.buttonContainer}>
      <Button
        title="Press me"
        color="#A855F7"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View style={styles.buttonContainer}>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View style={styles.fixToText}>
      <Button
        title="Left button"
        onPress={() => Alert.alert('Left button pressed')}
      />
      <Button
        title="Right button"
        onPress={() => Alert.alert('Right button pressed')}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F7F9FA',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 12,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default MyButtonApp;
