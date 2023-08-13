import { Alert, StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalStyle from '../utils/GlobalStyle'
import { TextInput } from 'react-native-gesture-handler'
import CommonButton from '../utils/CommonButton'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTasks } from '../redux/action'
import { Checkbox } from 'react-native-paper'
import CheckBox from '@react-native-community/checkbox';


const TaskAdd = ({ navigation }) => {

  const { tasks, taskID } = useSelector(state => state.taskReducer)
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    navigation.addListener('focus', () => {
      getTask();
    });
  }, [])


  const getTask = () => {
    const Task = tasks.find(task => task.ID === taskID)
    if (Task) {
      setTitle(Task.Title);
      setDesc(Task.Desc);
      setDone(Task.Done);
    }
  }

  const setTask = () => {
    if (title.length == 0) {
      Alert.alert('Warning!', 'Please write your task title.')
    } else {
      try {
        var Task = {
          ID: taskID,
          Title: title,
          Desc: Desc,
          Done: done,
        }
        const index = tasks.findIndex(task => task.ID === taskID);
        let newTasks = [];
        if (index > -1) {
          newTasks = [...tasks];
          newTasks[index] = Task;
        } else {
          newTasks = [...tasks, Task];
        }
        AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
          .then(() => {
            dispatch(setTasks(newTasks));
            ToastAndroid.showWithGravity("Task saved successfully.", ToastAndroid.SHORT, ToastAndroid.TOP)

            navigation.goBack();
          })
          .catch(err => console.log(err))
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <View style={GlobalStyle.bagckground} >

      <Text style={styles.heading}>Add Title</Text>
      <TextInput
        value={title}
        placeholder='Title'
        placeholderTextColor="grey"
        style={styles.input}
        onChangeText={(value) => setTitle(value)}
      />

      <Text style={styles.heading}>Description</Text>
      <TextInput
        value={Desc}
        placeholder='Title'
        placeholderTextColor="grey"
        style={styles.input}
        onChangeText={(value) => setDesc(value)}
      />
      <View style={styles.checkbox}>
        <CheckBox
          value={done}
          onValueChange={(newValue) => setDone(newValue)}
        />
        <Text style={styles.text}>
          Is Done
        </Text>
      </View>
      <View
        style={{

          alignItems: 'center',
        }}
      >

        <CommonButton
          onPress={setTask}
          title='Save Task'
          color='#615d96'
        />
      </View>
    </View>
  )
}

export default TaskAdd

const styles = StyleSheet.create({
  checkbox: {
    alignItems: 'center',
    flexDirection: 'row'
    ,marginVertical:20,
    justifyContent: 'center'
  },
  heading: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    fontSize: 20,
  },

  input: {
    width: "95%",
    color: '#000',
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: '#000000',
    height: 50,
    // margin: 30,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    textAlign: "left", borderRadius: 10,

  }
})