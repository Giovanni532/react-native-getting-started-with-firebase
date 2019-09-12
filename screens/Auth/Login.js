import React from 'react'
import {
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './Style'
import { Button } from 'react-native-elements'
import firebaseConfig from '../../constants/ApiKey'

// firebase connexion
firebase.initializeApp(firebaseConfig)

// LoginScreen with login & signup - handling error to do
export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      email: '', 
      password: '', 
      error: '', 
      loading: false 
      }
  }

  onLoginPress () {
    this.setState({ error: '', loading: true })
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false })
        this.props.navigation.navigate('Main')
      })
      .catch(() => {
        this.setState({ error: 'Connexion impossible, vérifiez vos identifiants', loading: false })
      })
  }

  onSignupPress () {
    this.setState({ error: '', loading: true })
    const { email, password } = this.state
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false })
        if (firebase.auth().currentUser) {
          let uid = firebase.auth().currentUser.uid
          if (uid) {
            firebase.database().ref('users/' + uid).set({
              email: email,
            })
          }
        }
        this.props.navigation.navigate('Main')
      })
      .catch(() => {
        this.setState({ error: 'Connexion impossible, votre mot de passe doit contenir au moins 6 charactères. Votre compte existe peut-être déjà.', loading: false })
      })
  }

  // button
  renderButtonOrLogin () {
    if (this.state.loading) {
      return <Text> Loading... </Text>
    }
    return <View style={styles.divButton}>
      <TouchableOpacity
        style={styles.button}
        onPress={this.onLoginPress.bind(this)}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={this.onSignupPress.bind(this)}
      >
        <Text>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  }

  // check handle error, back & route

  render () {
    return (

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible>
        <View style={styles.login}>
          <View>
            <Text>Systeme de connexion</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder='Votre e-mail'
              placeholderTextColor='#747d8c'
              returnKeyType='next'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Mot de passe'
              placeholderTextColor='#747d8c'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              returnKeyType='go'
              secureTextEntry
            />
            <Text>{this.state.error}</Text>
            {this.renderButtonOrLogin()}
          </View>

          <View>
            <Button
              textStyle={{ fontSize: 12, fontWeight: 'bold' }}
              rounded
              type='clear'
              title='Reset password'
              onPress={() => this.props.navigation.navigate('ResetPassword')}
               />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Login.navigationOptions = {
  title: 'Login'
}
