import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddMissionScreen = () => {
  const [missionName, setMissionName] = useState('');
  const [missionDescription, setMissionDescription] = useState('');

  const handleMissionNameChange = text => {
    setMissionName(text);
  };

  const handleMissionDescriptionChange = text => {
    setMissionDescription(text);
  };

  const handleCancelPress = () => {// handle cancel press
  };

  const handleNextPress = () => {// handle next press
  };

  return <View style={styles.container}>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
        <Text style={styles.cancelButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Add Mission</Text>
      <TextInput style={styles.input} placeholder="Mission Name" value={missionName} onChangeText={handleMissionNameChange} />
      <TextInput style={styles.input} placeholder="Mission Description" value={missionDescription} onChangeText={handleMissionDescriptionChange} />
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  cancelButtonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  RpTMpsmu: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default AddMissionScreen;