import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { isSignedIn } from './utils/authenticate'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync = this._bootstrapAsync.bind(this);
  }

  componentDidMount() {
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  async _bootstrapAsync(){
    const user = await isSignedIn()
    
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(user ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen