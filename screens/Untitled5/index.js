import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.jQdUbKLP}></TextInput><Text style={styles.YUNuVgbe}>Date</Text><TextInput style={styles.PbkIkAwX}></TextInput><TextInput style={styles.FYdYbgbt}></TextInput><TextInput style={styles.rQhlkZzb}></TextInput><Pressable><View style={styles.CxLBRCXK}><Text style={styles.bFChYMFw}>Submit
        </Text></View></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled4");
      }}><View style={styles.JUEAdiBN}></View></Pressable></ScrollView>
    </SafeAreaView>;
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
    left: 103,
    top: 168,
    flexDirection: "row",
    flex: 1
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
  },
  YUNuVgbe: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 15,
    top: 57,
    flexDirection: "row",
    flex: 1
  },
  PbkIkAwX: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 110,
    top: 54
  },
  FYdYbgbt: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 108,
    top: 90
  },
  rQhlkZzb: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 113,
    top: 130
  },
  CxLBRCXK: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 113,
    top: 480
  },
  bFChYMFw: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    left: 20,
    top: -1
  },
  JUEAdiBN: {
    height: 35,
    width: 33,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 10,
    top: 10
  }
});
export default Untitled5;