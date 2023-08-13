import React from "react";
import { View, SafeAreaView, StyleSheet, ScrollView, StatusBar, ImageBackground, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SideScroll from "./components/SideScroll";
import Flat from "./components/flat";
import Card from "./components/card";
import SocialTag from "./components/SocialTag";
import Password from "./components/password";
import State from "./components/State";
import Flex from "./components/Flex";
import FlatList from "./components/FlatList";
import Textfiled from "./components/Textfiled";
import ButtonFiled from "./components/ButtonFiled";
import AlertandToast from "./components/AlertandToast";
import Modaltest from "./components/Modaltest";
import StackNavigator from "./components/StackNavigator";
// import { createMaterialBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import EntriScreen from "./src/screens/EntriScreen";
import Todo from "./src/screens/ToDo";
import Done from "./src/screens/Done";
import { TabBarIndicator } from "react-native-tab-view";
import TaskAdd from "./src/screens/TaskAdd";
import { Provider } from "react-redux";
import { Store, store } from "./src/redux/store,";
import LoginPage from "./src/screens/LoginPage";
import Fetchapi from "./src/screens/Fetchapi";
import AxiosAPI from "./src/screens/AxiosAPI";
import SagaApi from "./src/screens/SagaApi";

function HomePage() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={

        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'To-Do') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 20;
            } else if (route.name === 'Done') {
              iconName = 'clipboard-check';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            );

          },

        })
      }

      tabBarOptions={{
        tabBarStyle: { height: 10 },
        activeTintColor: '#120907',
        inactiveTintColor: '#120907',
        labelStyle: { fontSize: 15, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen name={'To-Do'} component={Todo} />
      <Tab.Screen name={'Done'} component={Done} />
    </Tab.Navigator>
  )
}


function App() {

  // const Drawer = createDrawerNavigator();


  const Stack = createStackNavigator();
  return (
    <Provider store={store}>

      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#83e8e5"
        />
        <Stack.Navigator

          screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, size, color }) => {
              let iconName;

              return (
                <FontAwesome5
                  name={iconName}
                  color={color}
                  size={size}
                />
              )
            }
          })}
        >
          {/* <Stack.Screen name="EntriScreen" options={{ headerShown: false }} component={EntriScreen} /> */}
          {/* <Stack.Screen name="loginpage" options={{ headerShown: false }} component={LoginPage} /> */}
          {/* <Stack.Screen name="fetch" options ={{ headerShown: false }} component={Fetchapi} /> */}
          {/* <Stack.Screen name="fetch" options ={{ headerShown: false }} component={AxiosAPI} /> */}
          <Stack.Screen name="fetch" options={{ headerShown: false }} component={SagaApi} />

          {/* <Stack.Screen name="My Tasks" options={{ headerShown: false }} component={HomePage} /> */}
          {/* <Stack.Screen name="Task" options={{ headerShown: false }} component={TaskAdd} /> */}
          {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

})

export default App