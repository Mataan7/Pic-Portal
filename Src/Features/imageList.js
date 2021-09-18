import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { ImageView } from './ImageView';
import { Images } from '../Utilities/images';

export const ImageList = ({imageData,setImageData,onPress}) => {
  const listRenderer = ({ item }) => {
    return (
      <>
        <ImageView onPress={onPress}  setImageData={setImageData} link={item.link} />
      </>
    );
  };
  return (
    <View style={styles.listViewStyle}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={imageData}
        renderItem={listRenderer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  listViewStyle: {
    flex: 1,
    alignItems: 'center',
  },
});
