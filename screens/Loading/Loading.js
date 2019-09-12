import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'


export default class Loading extends React.Component {
  componentDidMount () { 
    firebase.auth().onAuthStateChanged(user => {
    this.props.navigation.navigate(user ? 'Main' : 'Login')
  })
  }
  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='small' color='#0072A4' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
