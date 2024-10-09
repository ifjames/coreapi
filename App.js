import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import MyActivityIndicator from './components/MyActivityIndicator';
import MyButtonApp from './components/MyButtonApp';
import MyImage from './components/MyImage';
import MyImageBackground from './components/MyImageBackground';
import MyKeyboardAvoidView from './components/MyKeyboardAvoidView';
import MyModal from './components/MyModal';
import MyStatusBar from './components/MyStatusBar';
import MyPressable from './components/MyPressable';
import MySwitch from './components/MySwitch';
import MyText from './components/MyText';
import MyTextInput from './components/MyTextInput';
import MyTouchableOpacity from './components/MyTouchableOpacity';
import MyTouchableHighlightExample from './components/MyTouchHighlight';
import MyViewBoxesWithColorAndText from './components/MyView';
import MyFlatList from './components/MyFlatList';
import MySectionList from './components/MySectionList';
import MyVirtualizedList from './components/MyVirtualizedList';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.card}>
          <MyImage />
        </View>
        <View style={styles.card}>
          <MyImageBackground />
        </View>
        <View style={styles.card}>
          <MyKeyboardAvoidView />
        </View>
        <View style={styles.card}>
          <MyActivityIndicator />
        </View>
        <View style={styles.card}>
          <MyButtonApp />
        </View>
        <View style={styles.card}>
          <MyModal />
        </View>
        <View style={styles.card}>
          <MyStatusBar />
        </View>
        <View style={styles.card}>
          <MyPressable />
        </View>
        <View style={styles.card}>
          <MySwitch />
        </View>
        <View style={styles.card}>
          <MyText />
        </View>
        <View style={styles.card}>
          <MyTextInput />
        </View>
        <View style={styles.card}>
          <MyTouchableOpacity />
        </View>
        <View style={styles.card}>
          <MyTouchableHighlightExample />
        </View>
        <View style={styles.card}>
          <MyViewBoxesWithColorAndText />
        </View>
        <View style={styles.card}>
          <MyFlatList />
        </View>
        <View style={styles.card}>
          <MySectionList />
        </View>
        <View style={styles.card}>
          <MyVirtualizedList />
        </View>

      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F0F0F3',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '90%',
  },
});
