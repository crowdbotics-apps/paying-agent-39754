import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.jQdUbKLP}></TextInput></ScrollView>
    <TextInput style={styles.hsygNuKE}></TextInput></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  jQdUbKLP: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 224,
    height: 30,
    position: "absolute",
    left: 110,
    top: 13
  },
  qtEScZty: {
    height: 25,
    width: 255,
    backgroundColor: "#E4E4E4",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 81,
    top: 51
  },
  MbsUCpUc: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 256,
    height: 25
  },
  hsygNuKE: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 246,
    height: 30,
    left: 83,
    top: 58
  }
});
export default Untitled5;