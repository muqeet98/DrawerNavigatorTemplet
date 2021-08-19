import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppHome} from './navigator';

import { CommonActions } from '@react-navigation/native';


import AdminHome from '../Admin/AdminHome'
import { Header } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
const Drawer= createDrawerNavigator();

const TeachDrawer= createDrawerNavigator();

const AdminDrawerNav=createDrawerNavigator();

const AdminDrawer= ()=> {
  return(
    <AdminDrawerNav.Navigator    drawerContentOptions={{
      activeTintColor: '#fff',
      labelStyle: {color:"#fff"},

      style:{backgroundColor:'#3c84d3'}

    }}>

      <AdminDrawerNav.Screen name="AdminHome" component={AdminHome} />
      {/* <Drawer.Screen name="Logout" component={Logout} listeners={({ navigation }) => ({
        state: (e) => {
           if (e.data.state.index === 3) {
             auth().signOut();
             AsyncStorage.setItem("user",null);
             AsyncStorage.setItem("id",null);
              // 3 is index of logout item in drawer
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    { name: 'AppHome' },

                  ],
                })
              );
           }
        }
    })} /> */}
    </AdminDrawerNav.Navigator>
  )
}



  export default AdminDrawer;