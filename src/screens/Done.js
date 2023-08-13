import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, ToastAndroid, View, FlatList, Alert } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskID, setTasks } from '../redux/action';
import GlobalStyle from '../utils/GlobalStyle';
import CheckBox from '@react-native-community/checkbox';

export default function Done({ navigation }) {

  const { tasks } = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const [filteredTask, setFilteredTask] = useState([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getTasks();
    });
  }, [deleteTask])

  const getTasks = () => {
    AsyncStorage.getItem('Tasks')
      .then(tasks => {
        const parsedTasks = JSON.parse(tasks);
        if (parsedTasks && typeof parsedTasks === 'object') {
          dispatch(setTasks(parsedTasks));
          setFilteredTask(parsedTasks.filter(task => task.Done === true));
        }
      })
      .catch(err => console.log(err))
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.ID !== id);
    AsyncStorage.setItem('Tasks', JSON.stringify(filteredTasks))
      .then(() => {
        dispatch(setTasks(filteredTasks));
        setFilteredTask(filteredTasks.filter(task => task.Done === true));
        // Alert.alert('Success!', 'Task removed successfully.');
        ToastAndroid.showWithGravity("Task removed successfully.", ToastAndroid.SHORT, ToastAndroid.TOP)

      })
      .catch(err => console.log(err))
  }

  const checkTask = (id, newValue) => {
    const index = tasks.findIndex(task => task.ID === id);
    if (index > -1) {
      let newTasks = [...tasks];
      newTasks[index].Done = newValue;
      AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
        .then(() => {
          dispatch(setTasks(newTasks));
          setFilteredTask(newTasks.filter(task => task.Done === true));
          ToastAndroid.showWithGravity("Task moved successfully.", ToastAndroid.SHORT, ToastAndroid.TOP)
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <View style={GlobalStyle.bagckground}>
      <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 25, }}>Completed List</Text>

      <FlatList
        data={filteredTask}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              dispatch(setTaskID(item.ID));
              navigation.navigate('Task');
            }}
          >
            <View style={styles.item_row}>

              <View>

                <CheckBox
                  style={{ backgroundColor: 'green', borderRadius: 10, marginRight: 10 }}
                  value={item.Done}
                  onValueChange={(newValue) => { checkTask(item.ID, newValue) }}

                />
              </View>
              <View style={styles.item_body}>
                <Text
                  style={[
                    GlobalStyle.CustomFontHW,
                    styles.title
                  ]}
                  numberOfLines={1}
                >
                  {item.Title}
                </Text>
                <Text
                  style={[
                    GlobalStyle.CustomFontHW,
                    styles.subtitle
                  ]}
                  numberOfLines={1}
                >
                  {item.Desc}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => { deleteTask(item.ID) }}
              >
                <FontAwesome5
                  name={'trash'}
                  size={25}
                  color={'#ff3636'}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(setTaskID(tasks.length + 1));
          navigation.navigate('Task');
        }}
      >
        <FontAwesome5
          name={'plus'}
          size={20}
          color={'#ffffff'}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
  },
  item_row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  item_body: {
    flex: 1,
  },
  delete: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    paddingRight: 10,
    backgroundColor: '#5d5988',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  subtitle: {
    color: '#999999',
    fontSize: 20,
    margin: 5,
  },
  color: {
    width: 20,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
})
