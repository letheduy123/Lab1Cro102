import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Banner from './component/Banner'
import Block1 from './component/Block1'
import Block2 from './component/Block2'
import Block3 from './component/Block3'
import { Theme, useTheme } from './component/Theme'

const App = () => {
  return (
    <ScrollView>
<View  style={st.container}>
  <Theme>
  <BodyApp/>
  </Theme>
  
   </View>
    </ScrollView>
    
  )
}
const BodyApp =()=>{
   // sử dụng hook để thao tác với theme
 const {theme, toggleTheme } = useTheme();
  return(
<View style={[st.khung, {backgroundColor: theme==='light'?'#927de5':'#4af4ca'}]}>


<TouchableOpacity onPress={toggleTheme}>
  <Text style={{width:30,height:26,alignSelf:'flex-end',margin:10,fontSize:20,textAlign:'center',borderRadius:10,backgroundColor:'#0eb9ef'}}>*</Text>
</TouchableOpacity>
         
<Banner img={'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474111yTp/tong-hop-logo-fpt-polytechnic-dep_043058591.jpg'} />

<Block1 style={{ backgroundColor: '#ccffcc' ,elevation: 5,  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, }} disableAvoidStatusBar={true}>
       <Text style={{fontSize:20,fontStyle:'normal',color:'red',marginBottom:5}}>Thông tin cá nhân</Text>
       <TextInput
         placeholder="Name..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10 }}
       />
        <TextInput
         placeholder="Email..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10  }}
       />
           <TextInput
         placeholder="Phone..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10  }}
       />
           <TextInput
         placeholder="Old..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10  }}
       />
           <TextInput
         placeholder="Year of Birth..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10  }}
       />
       <TouchableOpacity style={{width:'50%',height:40,borderWidth:1,borderColor:'gray',alignSelf:'center',alignItems:'center',borderRadius:10,backgroundColor:'#0eb9ef',padding:7}} >
        <Text style={{fontSize:17,color:'black'}}>Cập nhật</Text>
       </TouchableOpacity>
     </Block1>
     <Block2 style={{ backgroundColor: '#ccffcc' ,elevation: 5,  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, }} disableAvoidStatusBar={true}>
       <Text style={{fontSize:20,fontStyle:'normal',color:'red',marginBottom:5}}>Thông tin khóa học</Text>
       <TextInput
         placeholder="Course name..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10 }}
       />
        <TextInput
         placeholder="Course description..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10  }}
       />
           <TextInput
         placeholder="Course content..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10  }}
       />
           <TextInput
         placeholder="Course duration..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10  }}
       />
           <TextInput
         placeholder="Participation fee..."
         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10,borderRadius:10  }}
       />
       <TouchableOpacity style={{width:'50%',height:40,borderWidth:1,borderColor:'gray',alignSelf:'center',alignItems:'center',borderRadius:10,backgroundColor:'#0eb9ef',padding:7}} >
        <Text style={{fontSize:17,color:'black'}}>Cập nhật</Text>
       </TouchableOpacity>
     </Block2>
  


<Block3 infomation="Thông tin liên hệ" name="Lê Thế Duy" email="leduy@fpt.com"  phone="0123456789" address="Địa chỉ: 123 Đường Nam, Quận 1, TP. HCM"  />
 


</View>
  );

}

export default App

const st = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink'
  },
  khung:{
    width:'100%',
     height: '100%',
     
   }
})