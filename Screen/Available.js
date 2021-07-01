import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import AvailablePage from '../Screen/AvailablePage';

const Available = props =>  {
    
  return (
    <View>
     <View>
      <ScrollView style={styles.cardContainer}>
      {props.Data.map(d => {return(<AvailablePage obj={d} />)})}
      </ScrollView>
      </View>


    </View>
      
  );
}

const styles = StyleSheet.create({
 
  
});

export default Available;