import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image
} from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("./assets/Rectangle.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <StatusBar barStyle="light-content" />

        <Text style={styles.hashtag}>#hashtag</Text>
        <Image source={require("./assets/follow.png")} style={styles.btnFollow}/>
        {/* <ImageBackground
          source={require("./assets/CommentPanel.png")}
          style={{ width: "100%", height: 500, position: "absolute", bottom: 0, left: 0, backgroundColor: 'rgba(52, 52, 52, 0.8)'
 }}
        /> */}
        <View style={styles.commentPanel}>
          <View style={styles.commentWrapper}>
            <View style={styles.mainCommentWrapper}>
              <Image source={require("./assets/icon-like-selected.png")}/>
              <View style={styles.commentText}>
                <Text style={styles.mainText}>
                  jacob2 Strange man like @thedude loves to sing weird songs and
                  this girl has a nice hair color
                </Text>
                <Text style={styles.subText}>5min\t123 likes</Text>
              </View>

              <Image source={require("./assets/icon-like.png")}/>
            </View>
            {/* <View style={styles.subCommentWrapper}>
              <Image source={require("./assets/icon-like-selected.png")}/>
              <View>
                <Text>
                thedude yaaa dude
                </Text>
                <Text>5min\t123 likes</Text>
              </View>

              <Image source={require("./assets/icon-like.png")}/>
            </View> */}
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
  hashtag: {
    marginTop: 30,
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  btnFollow: {
    margin: 10,
  },
  commentPanel: {
    width: "100%",
    height: 500,
    position: "absolute",
    bottom: 0,
    left: 0,
    //</View>backgroundColor: "rgba(52, 52, 52, 0.8)"
  },
  commentWrapper: {
    width: '90%',
    
  },
  mainCommentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentText: {

  },
  mainText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
  },
  subText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    color: '#B7B7B7'
  }
});
