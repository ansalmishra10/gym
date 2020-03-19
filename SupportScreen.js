import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Linking,
  FlatList,
  Dimensions,
  AsyncStorage,




  } from 'react-native';

import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';
import Header from 'react-native-custom-headers';

class SupportScreen extends React.Component {
  render() {
    return(
        <SafeAreaProvider>
        <Header navigation={this.props.navigation}
          showHeaderImage={false}
          headerColor ={'#161718'}
          backImagePath={require('./arrowlogo2.png')}
          headerName={'Support'}
          headerTextStyle={{fontFamily:'Gilroy-Bold', color:'white',marginLeft:10}} />
         
         <View style={{flex:1,backgroundColor:'white'}}>

            <TouchableOpacity style={{height:90,width:'90%',marginLeft:'5%',borderRadius:12,elevation:2,backgroundColor:'white',marginTop:20,shadowOffset: {width: 2,height: 2},shadowColor: '#00000014'}}>

              <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'#242B3780',marginLeft:22,marginTop:20}}>Email</Text>
              <Text style={{fontSize:20,fontFamily:'Exo2-Regular',color:'#161718',marginLeft:22,marginTop:2}}>support@gym.in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height:90,width:'90%',marginLeft:'5%',borderRadius:12,elevation:2,backgroundColor:'white',marginTop:20,shadowOffset: {width: 2,height: 2},shadowColor: '#00000014'}}>

              <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'#242B3780',marginLeft:22,marginTop:20}}>Phone</Text>
              <Text style={{fontSize:20,fontFamily:'Exo2-Regular',color:'#161718',marginLeft:22,marginTop:2}}>+91 987654321</Text>
            </TouchableOpacity>



         </View>
        </SafeAreaProvider>
    );
  }
}

export default SupportScreen;
