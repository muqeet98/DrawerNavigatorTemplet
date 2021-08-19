import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Button from '../components/Button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { NavigationHelpersContext } from "@react-navigation/native";
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';


const AdminHome = ({ navigation }) => {
  return (
    <View style={styles.center}>

      <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginBottom: 20, marginRight: 10, marginTop: 10 }}>
      {/* <Icon name="log-out-outline" size={RFValue(40)} color="#fff" onPress={() =>{
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
            }));
      }}/> */}

      </View>

      <Text style={styles.title}>
        Welcome to Admin Panal !
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#3c84d3'
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 5,
  },
  title: {
    fontSize: RFValue(25),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: 'center'
  },
});

export default AdminHome;