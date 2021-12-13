import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Mybutton from './components/Button';

const ProfilePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Demographics</Text>        
      </View>
      <View>
        <Mybutton 
            title="Scan Badge"
            customClick={() => navigation.navigate('ScanningScreen')} /> 
        </View>
        <View>
        <Mybutton 
            title="Return Landing"
            customClick={() => navigation.navigate('LandingScreen')} /> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  }
});

export default ProfilePage;