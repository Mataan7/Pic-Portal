import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ImageList } from './Src/Features/imageList';
import { Button } from './Src/Components/Button';
import { AddImage } from './Src/Features/AddImage';
import { ImageScreen } from './Src/Features/imageScreen';

const App = () => {
  const [addimage, setAddImage] = useState(false);
  const [touched, setTouched] = useState(false);
  const [description, setDescription] = useState();
  const [link, setLink] = useState('');
  const [imageData, setImageData] = useState([]);
  const [onPressLink, setOnPressLink] = useState();
  const onAdd = () => {
    setImageData([...imageData, { description: description, link: link }]);
    setAddImage(false);
    setLink('http/www.wara.com');
  };
  const index = imageData.length - 1;
  const filter = (num, index) => {
    if (imageData.length - 1 > index) {
      return num;
    }
  };
  const onPress = (link) => {
    setOnPressLink(link);
    setTouched(true);
  };
  const screenRenderer = () => {
    if (!addimage && !touched) {
      return (
        <>
          <View style={styles.topStyle}>
            <Image
              style={styles.imageStyle}
              source={require('./Src/Utilities/Pic-Portal1.png')}
            />
            <Button onPress={() => setAddImage(true)} title="+" />
          </View>

          <ImageList
            onPress={onPress}
            setImageData={() => setImageData(() => imageData.filter(filter))}
            imageData={imageData}
          />
        </>
      );
    } else if (addimage) {
      return (
        <>
          <AddImage
            onAdd={() => onAdd()}
            description={setDescription}
            link={setLink}
          />
        </>
      );
    } else if (touched) {
      return <ImageScreen link={onPressLink} />;
    }
  };

  return <View style={styles.mainStyle}>{screenRenderer()}</View>;
};

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
  },
  topStyle: {
    flex: 0.35,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#656565',
    borderBottomWidth: 1,
  },
  imageStyle: {
    width: '85%',
    height: '60%',
  },
});

export default App;
