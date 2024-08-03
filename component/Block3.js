import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Block3 = ({infomation,name,email,phone,address}) => {
  return (
    <View style={st.container}>
     <Text style={{fontSize:17,color:'red',fontStyle:'normal'}}>{infomation}</Text>
     <Text style={{fontSize:15,color:'black'}}>Name: {name}</Text>
     <Text style={{fontSize:15,color:'black'}}>Email: {email}</Text>
     <Text style={{fontSize:15,color:'black'}}>Phone: {phone}</Text>
     <Text style={{fontSize:15,color:'black'}}>Address: {address}</Text>
    </View>
  )
}

export default Block3

const st= StyleSheet.create({
  container:{
    backgroundColor:'#0eb9ef',
    borderRadius:10,
    padding:10,
    elevation: 50,
   
  
    margin:5
  }
})