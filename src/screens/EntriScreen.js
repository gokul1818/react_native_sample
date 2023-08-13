import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
// import PushNotification from "react-native-push-notification";
import GlobalStyle from '../utils/GlobalStyle';

export default function Splash({ navigation }) {

  useEffect(() => {
    // createChannels();
    setTimeout(() => {
      // navigation.replace('My Tasks');
    }, 2000);
  }, []);

  // const createChannels = () => {
  //     PushNotification.createChannel(
  //         {
  //             channelId: "task-channel",
  //             channelName: "Task Channel"
  //         }
  //     )
  // }

  return (
    <View style={styles.body} >

      <Image
        style={styles.logo}
        source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/todo-list-2839461-2371075.png?f=webp' }}
      />


      <Text
        style={[
          styles.text
        ]}
      >
        To-Do List
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // flexDirection: "column-reverse",
    backgroundColor: "#615d96",
    margin: 0,
    paddingTop:30,
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
    // marginTop: 40,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
})