import React from 'react'
import {
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { Button } from 'react-native-elements'
import firebase from 'firebase'
import { styles } from './Style';

export default class ResetPassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textInput: "",
      error: ""
    }
  }

  resetPassword = (yourEmail) => {
    firebase.auth().sendPasswordResetEmail(yourEmail)
      .then(() => {
        this.props.navigation.navigate('Congrats')
      }).catch(() => {
        this.setState({error: "Votre email n'est pas dans la base de données, ou l'email est invalide"})
      })
  }

  render () {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible>
        <View style={styles.login}>
          <View style={styles.text}>
            <Text style={{textAlign: "center"}}>
            Saisissez votre adresse e-mail, si cette dernière est dans notre base de données nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder='Votre e-mail'
              placeholderTextColor='#747d8c'
              returnKeyType='next'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={e => this.setState({textInput: e})}
              value={this.state.textInput}
            />
          </View>
          <Text>{this.state.error}</Text>
          <View>
            <Button
              rounded
              textStyle={{ fontSize: 12, fontWeight: 'bold' }}
              type='clear'
              title='Envoyer'
              onPress={() => this.resetPassword(this.state.textInput)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
ResetPassword.navigationOptions = {
  title: 'Reset'
}
