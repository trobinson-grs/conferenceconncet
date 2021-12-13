import React, {useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Button from './components/Button';
import { openDatabase } from 'react-native-sqlite-storage';
import Mybutton from './components/Button';
import * as SQLite from 'expo-sqlite';
import EventList from './components/EventList';

const db = SQLite.openDatabase('./ConfConnect.db');

const Landing = ({ navigation }) => {  
  return (  
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Current Show</Text>  
        <Mybutton 
          title="Scan Badges"
          customClick={() => navigation.navigate('ScanningScreen')} />  
      </View>
      <View style={styles.titleContainer}>
          <Text style={styles.textRender}>Scans Count = 0</Text>
          <Text style={styles.textRender}>Scans in cloud = 0</Text>
      </View>
      <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        }} />
      <View style={styles.titleContainer}>
          <Mybutton 
          title="Email Scans"
          customClick={() => navigation.navigate('EmailScansScreen')} /> 
      </View> 
      <View style={styles.titleContainer}>
        <Text style={styles.textRender}>Download URL = https://www.globreg.com</Text>   
      </View> 
    </SafeAreaView>      
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: "center",
  },
  textRender: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: "center",
  },
});

export default Landing;