import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, View, ScrollView, TouchableOpacity } from 'react-native';

import Data from '../Data/Data.json';
import Home from '../Screen/Home';
import OnDutyMap from '../Screen/OnDutyMap';
import AvailableMap from '../Screen/AvailableMap';

const Stack = createStackNavigator();

function HomePage ({ navigation }) {
  // console.log(Data);
  return (
    <View style={styles.viewContainer}>
      <View style={styles.headerButton}>
     
     <View style={styles.homebutton}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')} >
         <Text style={styles.buttontext}>Off Duty</Text>
    </TouchableOpacity>    
     </View >
     <View style={styles.button}>
     <TouchableOpacity onPress={() => navigation.navigate('Onduty')}>
        <Text style={styles.buttontext}>On Duty</Text>
    </TouchableOpacity> 
    </View>   
    <View style={styles.button}>
    <TouchableOpacity onPress={() => navigation.navigate('Available')} >
        <Text style={styles.buttontext}>Available</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View>
    <ScrollView style={styles.container}>
       {
         Object.keys(Data).map(key => {
           return( <Home title={key} Data={Data[key]} />)
         })
       }
    </ScrollView>
    </View>
    
    
    </View>
    
  );
}

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Onduty" component={OnDutyMap} />
        <Stack.Screen name="Available" component={AvailableMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginBottom: 50,
    margin: 5,
    borderRadius: 30
  },
  headerContainer: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E1E1E1'
  },
  container: {
    height: '100%',
    width: '100%', 
    backgroundColor: '#fff',
  },
  titletext: {
    color: 'white',
    fontSize: 22,
    paddingTop: 20,
    paddingLeft: 150,
    fontWeight: 'bold'
  },
  RouteButton: {
    marginBottom: 50,
    marginBottom: 50
  },
  icon: {
    color: 'red',
    marginTop: 30
  },
  navigationView: {
    backgroundColor: '#F7F7F7', 
    height: 70,
    marginBottom: 2
  },
  headerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 4,   
  },
  button: {
      backgroundColor: '#C0C0C0',
      marginTop: 5,
      height: 50,
      width: 120,
      margin: 5,
      borderRadius: 35
  },
  homebutton: {
    backgroundColor: '#fbec5d',
      marginTop: 5,
      height: 50,
      width: 120,
      margin: 5,
      borderRadius: 35
  },
  buttontext: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
      color: 'white'
  }
});
