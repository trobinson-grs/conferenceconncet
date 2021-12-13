import React, {useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Button from './components/Button';
import Mybutton from './components/Button';
import * as SQLite from 'expo-sqlite';
import EventList from './components/EventList';

const Startup = ({ navigation }) => {  
  return (  
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Please select an existing show or click to add a new show.</Text>  
        <Mybutton 
          title="Add a Show"
          customClick={() => navigation.navigate('NewActivationScreen')} />  
      </View>
      <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        }} />
    
        <View style={styles.showTitleContainer}>
            <Text style={styles.showTitle}>Existing Show(s)</Text>  
        </View>
        <EventList navigation={ navigation}/>
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
    fontSize: 20,
    textAlign: "center",
  },
  showTitleContainer: {
    paddingTop: 16,
    justifyContent: 'center',
  },
  showTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: "center",
  },
});

export default Startup;