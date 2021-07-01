import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import Data from '../Data/Data.json';
import OndutyPage from '../Screen/OndutyPage';

const OnDuty = props =>  {
    
  return (
    <View>
     <View>
      <ScrollView style={styles.cardContainer}>
      {props.Data.map(d => {return(<OndutyPage obj={d} />)})}
      </ScrollView>
      </View>


    </View>
      
  );
}

const styles = StyleSheet.create({
 
  
});

export default OnDuty;