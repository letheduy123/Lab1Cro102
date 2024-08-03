import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Block2 = ({ children, style, disableAvoidStatusBar=false, ...props }) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={[st.wrapper, style]}
    {...props}
  >
     {!disableAvoidStatusBar && <StatusBar barStyle="dark-content"  backgroundColor="#61dafb"  />}
     {children}
    </KeyboardAvoidingView>
  )
}

export default Block2

const st = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
        margin: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        
      },
})