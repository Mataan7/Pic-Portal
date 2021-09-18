import React from 'react';
import { View, StyleSheet, Text, Image ,TouchableOpacity} from 'react-native';

export const ImageView = ({ link,setImageData ,onPress }) => {
  return (
    <TouchableOpacity onPress= {()=>onPress(link)} activeOpacity={1}>
    <View style={styles.viewStyle}>
      <Image
      onError={setImageData}
        style={styles.imageStyle}
        source={{
          uri: link,
        }}
      />
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: 350,
    height: 550,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 30,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
});
