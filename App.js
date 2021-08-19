import React from 'react';
import {Modal,ActivityIndicator,View,Text, BackHandler, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { StudentStack, TeacherStack } from "./navigation/navigator";
import {NavigationContainer } from '@react-navigation/native';
import {AppHome} from './navigation/navigator'
import {Admin} from './navigation/navigator'
import { DrawerNavigator } from "./navigation/drawerNav";
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
// import PushNotification from "react-native-push-notification";
// import { CommonActions } from '@react-navigation/native';
// import messaging from '@react-native-firebase/messaging';


export default class App extends React.Component {



    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        isLogin:false,
        type:0

      };
      AsyncStorage.getItem("teachercount").then(count=>{
        if(count==null){
          AsyncStorage.setItem("teachercount","0")
          // Alert.alert(count)
        }

      })




    }

    componentDidMount(){


  }
    render() {
      return(
        <NavigationContainer>
          <AppHome />
        </NavigationContainer>
      )

   }

}
  const CustomProgressBar = ({visible}) => (
    <Modal onRequestClose={() => null} visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#dcdcdc',
          backgroundColor: '#dcdcdc',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{borderRadius: 10, backgroundColor: 'white', padding: 25}}>
          <Text style={{fontSize: 20, fontWeight: '200'}}>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );