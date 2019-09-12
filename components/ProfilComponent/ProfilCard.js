import React from 'react'
import firebase from 'firebase'
import { View, Text, Linking } from 'react-native'
import { Icon, SocialIcon } from 'react-native-elements'

import { Button } from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


export default class ProfilCard extends React.Component {

  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
        this.props.navigation.navigate('Login');
    } catch (e) {
        console.log(e);
    }
}

  render () {
    return (
      <ScrollView> 
            <Button 
              rounded 
              onPress={this.signOutUser} 
              icon={<Icon 
              name='home' />}
              >
            <Text>Se déconnecter</Text>
          </Button>
      </ScrollView>
    )
  }
}
