import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Welcome</Text>
            <Text style={styles.modalText}>
              This is a simple, elegant modal design.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 3,
    width: '100%',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#5A67D8',
  },
  buttonClose: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default MyModal;
