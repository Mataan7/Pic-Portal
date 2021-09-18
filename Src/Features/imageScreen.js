import React from 'react'
import {View,StyleSheet ,Text,Image} from 'react-native'


export const ImageScreen=({description,link})=>{
  

  
  return(<View style={styles.conatiner}>
      <View style={styles.viewStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: link,
        }}
      />
    </View>
  </View>)
}



const styles=StyleSheet.create({
  conatiner:{
    flex:1,
    alignItems:"center",
  },
  viewStyle: {
    width: 350,
    height: 550,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginTop: 50,
    marginBottom: 30,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
})