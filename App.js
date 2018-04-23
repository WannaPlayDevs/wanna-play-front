import React, { Component } from 'react'
import {
  StyleSheet, 
  View, 
  Text
} from 'react-native'

import Splash from './src/screens/Splash.js'
import Landing from './src/screens/Landing.js'

const styles = StyleSheet.create({
})

export default class App extends Component {

  state = {
    loaded: false,
  }

  loadApp() {
    setTimeout(()=> this.setState({loaded:true}), 2000)
  }

  constructor() {
    super()
    this.loadApp()
  }

  render() {
    return (
      <View style={{flex:1}}>

        {this.state.loaded ? <Landing /> : <Splash />}
        
        {this.props.children}
      </View>
    )
  }
}
