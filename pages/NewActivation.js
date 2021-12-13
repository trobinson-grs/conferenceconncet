import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Button from './components/Button';

const Landing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Please enter your activation code below</Text>     
      </View>
      <View style={styles.inputContainer}> 
        <TextInput style={styles.input}></TextInput>     
      </View>
      <View>
        <Button title="Submit"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  inputContainer: {
    padding: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: '#f5572d',
    textAlign: 'center',
  },
});

export default Landing;