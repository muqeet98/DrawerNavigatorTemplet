
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  Image,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { TextInput, RadioButton, IconButton, Colors } from 'react-native-paper';
// import {Ionicons, Zocial} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Form, Item, Input, Label, Button, Picker } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const loginrUser = () => {
            if (email === '' || password === '') {
              Alert.alert('Enter details to sigin!');
              navigation.navigate("AdminStack",{screen:"AdminHome"});
            } else {
              navigation.navigate("AdminStack",{screen:"AdminHome"});

            }
        }
    return (
         isLoading ? (
                <CustomProgressBar />
         ):
        <View style={{ backgroundColor: '#fff', flex: 1, borderWidth: 2 }} >
            <Image style={styles.logo}
                source={require('./icons/logo.png')} />

            <View style={{ alignItems: 'center' }}>

            </View>
            <View>
                <Form style={{ marginRight: ('5%'), marginEnd: ('5%') }}>
                <Item regular style={{marginTop:'5%', borderRadius: 10, borderWidth:2, marginLeft: ("5%")}}>
                        <Input placeholder='Email' textAlign="center" style={{ fontSize: RFValue(16), color: 'black' }} value={email} onChangeText={setEmail} />
                    </Item>
                    <Item regular style={{marginTop:'5%', borderRadius: 10, borderWidth:2 ,marginLeft:("5%")}}>
                        <Input placeholder='Password' textAlign="center" style={{ fontSize: RFValue(16), color: 'black', }} value={password} onChangeText={setPassword} />
                    </Item>
                </Form>
                <Button iconRight light full rounded style={styles.button} onPress={() => loginrUser()} >

                    <Text style={styles.buttonText}>Login</Text>
                </Button>

                {/* <Text style={{ fontSize: RFValue(15), color: '#1273DE', alignSelf: 'center', marginTop:'5%' }}>
                    Forget Password?</Text> */}
                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'5%'}}>
                <Text style={styles.buttonTextsmall}>Do not Have an Account </Text>
                <Text style={{fontSize: RFValue(16), color: '#1273DE'}} onPress={() => navigation.navigate("RegisterScr")} >Register Here</Text>

                </View>
            </View>

        </View>
    );
}
  const CustomProgressBar = ({visible}) => (
        <Modal onRequestClose={() => null} visible={visible}>
          <View
            style={{
              flex: 1,
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
export default Login;


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: wp('50%'),
        height: hp('6%'),
        borderRadius: 10,
        backgroundColor: '#1273DE',
        borderColor: '#1273DE',
        borderWidth: 1,
        marginBottom: ('1%'),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: ('5%')
    },
    logo: {
        width: 143,
        height: 150,
        alignSelf: 'center',
        marginTop: 30

    },
    buttonText: {
        fontSize: RFValue(20),
        color: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonTextsmall: {
        fontSize: RFValue(16),
        color: 'black',
        // alignSelf: 'center',
        // justifyContent: 'center',
        // alignSelf: 'center'
    },
    input: {
        width: wp('85%'),
        marginBottom: ('5%'),
    },
    buttonfb: {
        alignItems: 'center',
        width: wp('40%'),
        height: hp('6%'),
        borderRadius: 30,
        backgroundColor: 'black',
        borderColor: '#fff',
        borderWidth: 1,
        marginBottom: ('5%'),
        marginTop: ('5%'),
        marginLeft: ('2%'),
    },

})