import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import OffDuty from '../Screen/OffDuty';
const Home = props =>  {
    // console.log(Data);
  return (
    <View>
      <View>
      <ScrollView style={styles.cardContainer}>
      {props.Data.map(d => {return(<OffDuty obj={d} />)})}
      </ScrollView>
      </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
  },
  
});

export default Home;