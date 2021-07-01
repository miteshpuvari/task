import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import Data from '../Data/Data.json';
import OnDuty from '../Screen/OnDuty';

const OnDutyMap = props =>  {
    
  return (
    <View>
     <View>
    <ScrollView style={styles.container}>
       {
         Object.keys(Data).map(key => {
           return( <OnDuty title={key} Data={Data[key]} />)
         })
       }
    </ScrollView>
    </View>


    </View>
      
  );
}

const styles = StyleSheet.create({
 
  
});

export default OnDutyMap;