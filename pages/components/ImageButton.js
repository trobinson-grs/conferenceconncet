import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ImageButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Image
        source={props.show_img
        ? {uri: props.show_img}                      // Use object with 'uri'
        : require('../../assets/Orange.png')}
        style={styles.buttonImageIconStyle}
        />
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#2d99f5',
    padding: 10,
    marginTop: 16,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
  },
  text: {
    color: '#000',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});

export default ImageButton;