import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const AddMissionScreen = () => {
  const [missionNumber, setMissionNumber] = useState('');
  const [payingAgentName, setPayingAgentName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  return <View style={styles.container}>
      <Text style={styles.title}>Add Mission</Text>
      <TextInput style={styles.input} placeholder="Mission Number" value={missionNumber} onChangeText={setMissionNumber} />
      <TextInput style={styles.input} placeholder="Paying Agent Name" value={payingAgentName} onChangeText={setPayingAgentName} />
      <TextInput style={styles.input} placeholder="From Date" value={fromDate} onChangeText={setFromDate} />
      <TextInput style={styles.input} placeholder="To Date" value={toDate} onChangeText={setToDate} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});
export default AddMissionScreen;