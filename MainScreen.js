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

class MainScreen extends React.Component {

  setValue =(type) =>{
     GLOBAL.libcat = type
      this.props.navigation.navigate('Allexercises')
     // console.log(GLOBAL.libcat)
   }

  render() {
  return(
          <SafeAreaProvider>
          <Header navigation={this.props.navigation}
          showHeaderImage={false}
          headerColor ={'#161718'}
          backImagePath={require('./arrowlogo2.png')}
          headerName={'Exercises Library'}
          headerTextStyle={{fontFamily:'Gilroy-Bold', color:'white',marginLeft:10}} />

           <View style={{flex:1,backgroundColor:'white'}}>

              <TouchableOpacity style={{marginTop:20,width:Dimensions.get('window').width-36,alignSelf:'center'}}
              onPress={()=>this.setValue('Gym')}>
              <ImageBackground source={require('./thmb9.png')}
                style={{height:148,width:Dimensions.get('window').width-36,justifyContent:'center',borderRadius:12}}>

                   <Text style={{fontSize:25,fontFamily:'Exo2-Medium',color:'#FFFFFF',alignSelf:'center'}}>Gym</Text>


              </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{marginTop:18,width:Dimensions.get('window').width-36,alignSelf:'center'}}
               onPress={()=>this.setValue('Home')}>
              <ImageBackground source={require('./thmb7.png')}
                style={{height:148,width:Dimensions.get('window').width-36,justifyContent:'center',borderRadius:12}}>

                   <Text style={{fontSize:25,fontFamily:'Exo2-Medium',color:'#FFFFFF',alignSelf:'center'}}>Home</Text>


              </ImageBackground>
              </TouchableOpacity>


              <TouchableOpacity style={{marginTop:18,width:Dimensions.get('window').width-36,alignSelf:'center'}}
               onPress={()=>this.setValue('Travel')}>
              <ImageBackground source={require('./thmb8.png')}
                style={{height:148,width:Dimensions.get('window').width-36,justifyContent:'center',borderRadius:12}}>

                   <Text style={{fontSize:25,fontFamily:'Exo2-Medium',color:'#FFFFFF',alignSelf:'center'}}>Travel</Text>


              </ImageBackground>
              </TouchableOpacity>
           </View>
          </SafeAreaProvider>
    ) ;
  }
}

 export default MainScreen;
