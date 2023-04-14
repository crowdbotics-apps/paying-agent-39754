import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const MissionScreen = () => {
  const navigation = useNavigation();
  const missions = [{
    id: 1,
    location: 'Mars',
    dates: '2022-2024',
    missionNumber: 'M-01',
    image: require('../assets/mission1.jpg')
  }, {
    id: 2,
    location: 'Jupiter',
    dates: '2025-2027',
    missionNumber: 'J-01',
    image: require('../assets/mission2.jpg')
  }, {
    id: 3,
    location: 'Saturn',
    dates: '2028-2030',
    missionNumber: 'S-01',
    image: require('../assets/mission3.jpg')
  }, {
    id: 4,
    location: 'Neptune',
    dates: '2031-2033',
    missionNumber: 'N-01',
    image: require('../assets/mission4.jpg')
  }, {
    id: 5,
    location: 'Pluto',
    dates: '2034-2036',
    missionNumber: 'P-01',
    image: require('../assets/mission5.jpg')
  }];
  return <View style={styles.container}>
      <TouchableOpacity style={styles.addButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI8");
      }}><Text style={styles.addButtonText}>+</Text></Pressable>
      </TouchableOpacity>
      <ScrollView style={styles.missionList}>
        {missions.map(mission => <TouchableOpacity key={mission.id} style={styles.missionBox}>
            <Image source={mission.image} style={styles.missionImage} />
            <View style={styles.missionDetails}>
              <Text style={styles.missionLocation}>{mission.location}</Text>
              <Text style={styles.missionDates}>{mission.dates}</Text>
              <Text style={styles.missionNumber}>{mission.missionNumber}</Text>
            </View>
          </TouchableOpacity>)}
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
    left: 275,
    top: 492
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  missionList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20
  },
  missionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  missionImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10
  },
  missionDetails: {
    flex: 1
  },
  missionLocation: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  missionDates: {
    fontSize: 16,
    marginBottom: 5
  },
  missionNumber: {
    fontSize: 14,
    color: '#666'
  }
});
export default MissionScreen;