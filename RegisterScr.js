import { Button, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React, {useEffect, useState} from 'react';

const RegisterScr = ({ navigation }) => {
    useEffect(()=>{
        const timer = setTimeout(() => {
            navigation.navigate("Login")
          }, 3000);
          return () => clearTimeout(timer);
    }
    )
    return (
        <View style={{ backgroundColor: '#fff', flex: 2 }} >
            <View style={{ alignItems: 'center', marginTop: ('10%') }}>
                <Image style={styles.logo}
                    source={require('./icons/logo.png')} />
            </View>
            <View style={{ alignItems: 'center', marginTop: ('25%') }}>
                <Text>Welcome</Text>
            </View>
        </View>
    );
}



export default RegisterScr;


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: wp('80%'),
        height: wp('12%'),
        borderRadius: 30,
        backgroundColor: '#1273DE',
        borderColor: '#1273DE',
        borderWidth: 1,
        marginBottom: ('5%'),
        justifyContent: 'center'
    },
    logo: {
        width: 143,
        height: 150,
        marginTop: ('15%'),
        alignItems: 'stretch'
    },
    buttonText: {
        fontSize: RFValue(18),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
    },
})