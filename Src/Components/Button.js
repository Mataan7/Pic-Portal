import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export const Button = ({ textstyle1, style1, ...props }) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={[styles.buttonStyle, style1]}onPress={props.onPress}>
        <Text style={[styles.textStyle, textstyle1]} >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 37.5,

    height: 75,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textStyle: {
    fontSize: 65,
    color: 'white',
    paddingBottom: 6,
  },
});
