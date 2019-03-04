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

export default class SharingScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/Rectangle.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.modal}>
          <View style={styles.sharingPanel}>
          <View style={styles.firstLine}> 
              <Text> </Text>
              
              <Text style={styles.shareText}>Share with</Text>
              <Image
                source={require("../assets/close.png")}
                style={styles.close}
              />
           </View>
           
            <Text style={styles.header}>Friend & Family</Text>

            <Image
              source={require("../assets/message-btn.png")}
              style={styles.button}
            />

            <Image
              source={require("../assets/whatsapp.png")}
              style={styles.button}
            />
            <Text style={[styles.header, {  marginTop:15}]}>The World</Text>

            <Image
              source={require("../assets/instagram.png")}
              style={styles.button}
            />

            <Image
              source={require("../assets/facebook.png")}
              style={styles.button}
            />
            <Image
              source={require("../assets/twitter.png")}
              style={styles.button}
            />
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
  firstLine: {
    width: "90%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shareText: {
    fontSize: 14,
    color: '#C6C6C6',
    //padding: 10,
    width: '80%',
    textAlign: 'center'
  },
  close: {
    marginVertical: 10,
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  sharingPanel: {
    width: "100%",
    height: 500,
    position: "absolute",
    bottom: 0,
    left: 0,
    alignItems: "center",
    borderRadius: 20
    //borderWidth: 1,
  },
  header: {
    fontSize: 20,
    color: '#FFFFFF',
    padding: 10,
  
  },


  commentWrapper: {
    width: "100%"
    //padding: 10,
  },
  button: {
    marginTop: 10
    //marginTop: 5,
  },
  mainCommentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  commentText: {
    width: "80%"
  },
  mainText: {
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    width: "100%",
    paddingLeft: 5
  },
  subText: {
    fontFamily: "Helvetica Neue",
    fontSize: 13,
    color: "#B7B7B7",
    marginTop: 10,
    paddingLeft: 5
  },
  subCommentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: 30,
    borderLeftWidth: 2,
    borderLeftColor: "#F3F3F3"
  },
  bottomPanel: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#C8C8C8"
  },
  emojiPanel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  messagePanel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
});
