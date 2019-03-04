import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  TextInput
} from "react-native";
import CommentScreen from "./screens/CommentScreen";
import SharingScreen from "./screens/SharingScreen";
import FirstScreen from "./screens/FirstScreen";
import { Font, AppLoading } from 'expo';


export default class App extends React.Component {
  state = {
    screen: 2,
    isReady: false
  };

  async componentDidMount(){
    await Font.loadAsync({
      //Montserrat: require('./assets/fonts/Montserrat.ttf'),
      'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
      'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf')
    });
    this.setState({isReady: true})
  }

  render() {
    if(!this.state.isReady)
      return <AppLoading/>

    return <FirstScreen/>
    // if (this.state.screen == 1) return <SharingScreen />;
    // else return <CommentScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
