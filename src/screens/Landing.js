import React, { Component } from "react"
import {
    StyleSheet, 
    View,
    Text
} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 512,
        height: 512,
        resizeMode: 'center',
    }
  })

export default class Splash extends Component {
    
  render() {
      return (
      <View style={styles.container}>
        <Text>Bienvenido!</Text>
      </View>
      )
    }
  }