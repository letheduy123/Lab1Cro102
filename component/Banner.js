import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = ({img}) => {
  return (
    <View>
     <Image style={st.image} source={{uri:img}}/>
    </View>
  )
}

export default Banner

const st = StyleSheet.create({
    image: {
        marginTop: 5,
        borderRadius: 20,
        width: '98%',
         height: 200,
         elevation: 20,
        alignSelf:'center'
    
      },
})