import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>merhaba</Text>
      <Link href="/home" style={styles.link}>Go to home page</Link>
      <Link href="/sign-up" style={styles.link}>Go to sign-up page</Link>
      <Link href="/sign*in" style={styles.link}>Go to sign in  page</Link>



    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent:'center',
    flex:1
  },
  link: {
    color:'#3498db',
    textDecorationStyle:'solid'
  }
})


export default index