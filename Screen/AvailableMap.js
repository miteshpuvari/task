import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import Data from '../Data/Data.json';
import Available from '../Screen/Available';

const AvailableMap = props =>  {
    
  return (
    <View>
     <View>
    <ScrollView style={styles.container}>
       {
         Object.keys(Data).map(key => {
           return( <Available title={key} Data={Data[key]} />)
         })
       }
    </ScrollView>
    </View>


    </View>
      
  );
}

const styles = StyleSheet.create({
 
  
});

export default AvailableMap;