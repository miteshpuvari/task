import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../Constant/Color';

const OffDuty = props =>  {
    
  return (
    <View style={styles.cardContainer} >
      <View style={styles.card}>
        <View style={styles.namerate}>
        <Text style={styles.name}> {props.obj.Name} </Text>
        <View style={{flexDirection: 'row', paddingLeft: '60%', paddingTop: 5}}>
        <Icon name="star" size={12} color={Color.primary} />
        <Icon name="star" size={12} color={Color.primary} />
        <Icon name="star" size={12} color={Color.primary} />
        </View>
        <Text style={styles.rate}> {props.obj.Rate} </Text>
        </View>
        <View style={styles.namerate}>
        <Text style={styles.id}> Order Id {props.obj.ID} </Text>
        <Text style={styles.ade}> {props.obj.ADE} </Text>
        </View>
        <View style={styles.namerate}>
          <Text style={styles.suite}> {props.obj.Driver} </Text>
          <Text style={styles.km}>{props.obj.km}</Text>
        </View>
        <View>
        <Text style={styles.line} numberOfLines={1}>               
          _________________________________________________
      </Text>       
        </View>
        
        <View style={styles.namerate}>
          <Text style={styles.deltitle}>Delivery By:</Text>
          <Text style={styles.delivery}> {props.obj.Delivery} </Text>
          <TouchableOpacity style={styles.ButtonCon}>
            <Text style={styles.Buttontext}>View</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
   margin: 8,
   justifyContent: 'space-between',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    margin: 5,
    borderRadius: 5,
    marginTop: 1,
    shadowOpacity: 0.26,
    shadowOffset: {width: 8, height: 1},
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: 'white',
  },
  namerate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 7
  },
  name:{
    fontWeight: 'bold',
    fontSize: 17
  },
  rate: {
    color: Color.primary
  },
  id: {
    color: '#999999'
  },
  ade: {
    color: Color.Green,
    fontWeight: 'bold'
  },
  suite: {
    fontWeight: 'bold'
  },
  km: {
    color: 'red'
  },
  delivery: {
    color: '#999999'
  },
  deltitle: {
    fontWeight: 'bold',
    color: '#000000'
  },
  ButtonCon: {
    borderColor: 'blue',
    borderWidth: 1,
    height: '100%',
    width: '15%'
  },
  Buttontext: {
    textAlign: 'center',
    color: 'blue'
  },
  line: {
    color: '#C0C0C0',
    marginBottom: 5
  }
});

export default OffDuty;