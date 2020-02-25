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
  TouchableHighlight,
  TextInput,
  Modal,
  Image,
  ImageBackground,
  Linking,
  FlatList,
  AsyncStorage,
  Dimensions,




  } from 'react-native';



import React, {Component} from 'react';
import Button from 'react-native-button';
import { SafeAreaProvider } from 'react-native-safe-area-context';



class SettingScreen extends React.Component {
  render() {
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
      <SafeAreaProvider>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',marginTop:25,alignSelf:'center'}}>

      <TouchableOpacity style={{width:161,height:163,borderRadius:12,backgroundColor:'white',elevation:2,shadowColor: '#000000',shadowOpacity: 1.0}}>
        <Image source={require('./profile.png')}
         style={{height:40,width:40,resizeMode:'contain',marginLeft:18,marginTop:29}}/>

         <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginTop:50,marginLeft:16}}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width:162,height:163,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0}}>

      <Image source={require('./about.png')}
       style={{height:40,width:40,resizeMode:'contain',marginLeft:23,marginTop:29}}/>

       <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginTop:50,marginLeft:17}}>About Us</Text>

      </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',marginTop:16,alignSelf:'center'}}>

      <TouchableOpacity style={{width:161,height:163,borderRadius:12,backgroundColor:'white',elevation:2,shadowColor: '#000000',shadowOpacity: 1.0}}>
        <Image source={require('./t&c.png')}
         style={{height:43,width:35,resizeMode:'contain',marginLeft:17,marginTop:20}}/>

         <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginTop:39,marginLeft:17,width:'80%'}}>Terms and Conditions</Text>
      </TouchableOpacity>


       <View style={{flexDirection:'column'}}>

      <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}>

      <Image source={require('./privacy.png')}
       style={{height:32,width:32,resizeMode:'contain',marginLeft:19}}/>

       <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:12}}>Privacy</Text>

      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,marginTop:14,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}>

      <Image source={require('./support.png')}
       style={{height:33,width:30,resizeMode:'contain',marginLeft:19}}/>

       <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:14}}>Support</Text>

      </TouchableOpacity>

      </View>

     </View>

     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',marginTop:15,alignSelf:'center'}}>

     <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}>

     <Image source={require('./notify.png')}
      style={{height:32,width:27,resizeMode:'contain',marginLeft:19}}/>

      <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:9}}>Notification</Text>

     </TouchableOpacity>


     <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}>

     <Image source={require('./logout.png')}
      style={{height:30,width:30,resizeMode:'contain',marginLeft:18}}/>

      <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:15}}>Logout</Text>

     </TouchableOpacity>

     </View>


      </SafeAreaProvider>
      </View>
    );
  }
}

export default SettingScreen;
