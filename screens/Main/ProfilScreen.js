import React from 'react';
import ProfilCard from '../../components/ProfilComponent/ProfilCard';

export default class ProfilScreen extends React.Component {
  render(){
    return (
      <ProfilCard navigation={this.props.navigation}/>
    );
  }
}

ProfilScreen.navigationOptions = {
  title: 'Profil',
};
