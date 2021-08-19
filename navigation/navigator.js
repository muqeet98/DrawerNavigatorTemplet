// import React from 'react';
// import Login from '../Login';
// import { createStackNavigator } from '@react-navigation/stack';
// import { exp } from 'react-native-reanimated';
// const Stack= createStackNavigator();

// function AppHome(){
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name="Login" component={Login} />

//         </Stack.Navigator>
//     )
// }


// export default AppHome;


import React from 'react';
//import {Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerActions } from '@react-navigation/native';
import Login from '../Login';
import RegisterScr from '../RegisterScr';
import AdminDrawer from './drawerNav'

import Icon from 'react-native-vector-icons/Ionicons';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AdminHome from '../Admin/AdminHome';
// import AddClass from '../Admin/AddClass';
// import AllClass from '../Admin/AllClasses';
// import EditClass from '../Admin/EditClass';
// import Requests from '../Admin/Requests';
// import AddAnnouncementAd from '../Admin/AddAnnouncement';
// import AddStudent from '../Admin/AddStudent';
// import AnnouncementHistory from '../Admin/AnnouncementHistory'
const Stack = createStackNavigator();
const StackDrawer = createStackNavigator();
const TeachStack = createStackNavigator();

const AdminStack = createStackNavigator();

const headerShow =
{
  title: 'UNIVERSITY OF KOTLI',
  headerStyle: {
    backgroundColor: '#1273DE'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
function Admin() {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen name="AdminHome" component={AdminDrawer} options={({ navigation }) => ({
        title: 'UNIVERSITY OF KOTLI', headerStyle: { backgroundColor: '#1273DE' }, headerTintColor: '#fff', headerLeft: () =>
          <Icon name="menu" size={RFValue(40)} color="#fff" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />, headerLeftContainerStyle: { paddingLeft: 10 }
      })} />
      <Stack.Screen name="AppHome" component={AppHome} options={{ headerShown: false }} />
    </AdminStack.Navigator>
  )
}




function AppHome() {
  return (
    <Stack.Navigator headerShown={false}>
      <Stack.Screen name="RegisterScr" component={RegisterScr}  options={{ headerShown: false }}  />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="AdminStack" component={Admin} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


export { AppHome, Admin };
