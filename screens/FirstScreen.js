import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class FirstScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/Rectangle.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.modal}>
          <View >
            <View style={styles.mask}>
              <Text style={styles.header}>Ready to capture Life in a Jiffy?</Text>
              <View style={styles.list}>
                <View style={styles.line}>
                <Image
                  source={require("../assets/Path.png")}
                  style={styles.icon}
                />
                <Text style={styles.text}> Showcase Passion</Text>
              </View>
              <View style={styles.line}>
                <Image
                  source={require("../assets/Path.png")}
                  style={styles.icon}
                />
                <Text style={styles.text}> Gain Recognition</Text>
              </View>
              <View style={styles.line}>
                <Image
                  source={require("../assets/Path.png")}
                  style={styles.icon}
                />
                <Text style={styles.text}> Inspire Others</Text>
              </View>
              </View>
              
              <Text style={styles.text}>Create your first cam on Jifcam</Text>
              <TouchableOpacity style={styles.btnReady}>
                <Text style={styles.textReady}>I’m ready</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.remindMe}>Remind me Later</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mask: {
    width: 289,
    height: 350,
    borderRadius: 11,
    backgroundColor: "#ffffff",
    alignItems: 'center',
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.61)",
    alignItems: 'center',
    justifyContent: 'center'
  },
  // rectangle: {
  //   width: 375,
  //   height: 667,
  //   backgroundColor: '#000000',
  //   opacity: 0.61,
  // },
  header: {
    //width: 266,
    height: 18,
    color: "#262626",
    fontFamily: "SFProDisplay-Bold",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 35,
  },
  list:{
    marginBottom: 22,
    marginTop: 21,
  },

  line: {
    flexDirection: 'row',

  },
  text: {
    height: 18,
    color: "#262626",
    fontFamily: "SFProDisplay-Regular",
    fontSize: 15,
    fontWeight: "400"
  },
  remindMe: {
    height: 24,
    color: "#d4d4d4",
    fontFamily: "SFProDisplay-Regular",
    fontSize: 20,
    fontWeight: "400"
  },
  btnReady: {
    width: 254,
    height: 57,
    borderRadius: 6,
    backgroundColor: "#ff6161",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 27
  },
  textReady: {
    height: 24,
    color: '#ffffff',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    fontWeight: '700',
  },
  icon: {
    width: 18,
    height: 15
    //backgroundColor: '#00ced1',
  }
});
