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
          <Image source={require("./assets/collapse.png")} style={styles.collapse}/>
          <View style={styles.commentWrapper}>
            <View style={styles.mainCommentWrapper}>
              <Image source={require("./assets/Oval.png")} style={styles.avatar}/>
              <View style={styles.commentText}>
                <Text style={styles.mainText}>
                  jacob2 Strange man like @thedude loves to sing weird songs and
                  this girl has a nice hair color
                </Text>
                <Text style={styles.subText}>5min  123 likes</Text>
              </View>

              <Image source={require("./assets/icon-like.png")}/>
            </View>
            <View style={styles.subCommentWrapper}>
              <Image source={require("./assets/Oval-1.png")} style={styles.avatar}/>
              <View style={styles.commentText}>
                <Text style={styles.mainText}>
                thedude yaaa dude
                </Text>
                <Text style={styles.subText}>5min  123 likes</Text>
              </View>

              <Image source={require("./assets/icon-like-selected.png")}/>
            </View>
          </View>
          <View style={styles.commentWrapper}>
            <View style={styles.mainCommentWrapper}>
              <Image source={require("./assets/Oval.png")} style={styles.avatar}/>
              <View style={styles.commentText}>
                <Text style={styles.mainText}>
                  jacob2 Strange man like @thedude loves to sing weird songs and
                  this girl has a nice hair color
                </Text>
                <Text style={styles.subText}>5min  123 likes</Text>
              </View>

              <Image source={require("./assets/icon-like.png")}/>
            </View>
            <View style={styles.subCommentWrapper}>
              <Image source={require("./assets/Oval-1.png")} style={styles.avatar}/>
              <View style={styles.commentText}>
                <Text style={styles.mainText}>
                thedude yaaa dude
                </Text>
                <Text style={styles.subText}>5min  123 likes</Text>
              </View>

              <Image source={require("./assets/icon-like.png")}/>
            </View>
          </View>
          <View style={styles.commentWrapper}>
            <View style={styles.mainCommentWrapper}>
              <Image source={require("./assets/Oval.png")} style={styles.avatar}/>
              <View style={styles.commentText}>
                <Text style={styles.mainText}>
                  jacob2 Strange man like @thedude loves to sing weird songs and
                  this girl has a nice hair color
                </Text>
                <Text style={styles.subText}>5min  123 likes</Text>
              </View>

              <Image source={require("./assets/icon-like.png")}/>
            </View>
            
          </View>
          <View style={styles.bottomPanel}>
            <View style={styles.emojiPanel}>
            <Image source={require("./assets/emoji.png")}/>
            <Image source={require("./assets/emoji.png")}/>
            <Image source={require("./assets/emoji.png")}/>
            <Image source={require("./assets/emoji.png")}/>
            <Image source={require("./assets/emoji.png")}/>
            <Image source={require("./assets/emoji.png")}/>
            <Image source={require("./assets/emoji.png")}/>
            <Image source={require("./assets/emoji.png")}/>
            </View>
          <View style={styles.messagePanel}>
            <TextInput placeholder='Say something'></TextInput>
            <Image source={require("./assets/icon-send.png")}/>
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
  hashtag: {
    marginTop: 30,
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
    //marginBottom: 10,
  },
  btnFollow: {
    margin: 10,
  },
  collapse:{
    marginVertical: 10,
  },
  commentPanel: {
    width: "100%",
    height: 500,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    borderRadius: 20,
    //borderWidth: 1,
  },
  commentWrapper: {
    width: '100%',
    //padding: 10,
    
  },
  avatar: {
    marginLeft: 10,
    //marginTop: 5,
  },
  mainCommentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  commentText: {
    width: '80%',
  },
  mainText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    width: '100%',
    paddingLeft: 5,
  },
  subText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    color: '#B7B7B7',
    marginTop: 10,
    paddingLeft: 5,
  },
  subCommentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 30,
    borderLeftWidth: 2,
    borderLeftColor: '#F3F3F3'
  },
  bottomPanel: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C8C8C8' 
  },
  emojiPanel: {
    width: "100%",
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  messagePanel: {
    width: "100%",
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 10,
  }
});
