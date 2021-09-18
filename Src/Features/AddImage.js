import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { Button } from '../Components/Button';

export const AddImage = ({ name, description, link, onAdd }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageViewStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../Utilities/Pic-Portal1.png')}
        />
      </View>

      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always">
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}> Add a new Image </Text>
        </View>


        <View style={styles.viewstyle}>
          <TextInput
            placeholder=" Description"
            style={styles.textInputStyle}
            onChangeText={(text) => {
              description(text);
            }}
          />
        </View>

        <View style={styles.viewstyle}>
          <TextInput
            placeholder=" Link"
            style={styles.textInputStyle}
            onChangeText={(text) => {
              link(text);
            }}
          />
        </View>
        <View style={styles.buttonViewStyle}>
          <Button
            title="Add"
            textstyle1={styles.buttonTextStyle}
            style1={styles.buttonStyle}
            onPress={onAdd}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 30,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#E8E8E8',
  },
  viewstyle: {
    height: 40,
    margin: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20,
    padding: 15,
    paddingTop: 5,
    borderColor: '#E8E8E8',
    backgroundColor: '#E8E8E8',
  },
  imageStyle: {
    width: 430,
    height: 100,
    marginBottom: 20,
  },
  imageViewStyle: {
    flex: 0.3,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#B02FFF',
    fontStyle: 'italic',
    textShadowColor: '#B02FFF',
  },
  textViewStyle: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
  },
  buttonStyle: {
    height: 40,
    width: 315,
    borderRadius: 35,
    backgroundColor: '#B02FFF',
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingRight: 5,
  },
  buttonViewStyle: {
    marginTop: 20,
    alignItems: 'center',
  },
});
