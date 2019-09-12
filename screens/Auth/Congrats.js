import React from 'react'
import {
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './Style'

export default class Congrats extends React.Component {
  render () {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible>
        <View style={styles.login}>
          <View>
            <Text>Nous vous avons envoyé un lien par e-mail :-)</Text>
          </View>
          <View>
            <Button
              textStyle={{ fontSize: 12, fontWeight: 'bold' }}
              rounded
              type='clear'
              title='Revenir'
              onPress={() => this.props.navigation.navigate('Login')} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Congrats.navigationOptions = {
  title: 'Congrats'
}
