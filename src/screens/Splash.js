import React, { Component } from "react"
import {
    StyleSheet, 
    View, 
    Image,
} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7F47DD',
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
        <Image
            style={styles.logo}
            source={require('./../../assets/images/logo.png')}
        />
      </View>
      )
    }
  }
