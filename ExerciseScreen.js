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

class ExerciseScreen extends React.Component {
  render() {
    return(
         <SafeAreaProvider>
            <View style={{backgroundColor:'white'}}>

              <ImageBackground source={require('./chinup.png')}
               style={{width:'100%',height:Dimensions.get('window').height/2-80,resizeMode:'contain'}}>

               <TouchableOpacity style={{marginTop:22,marginLeft:'3%',width:22}}>
               <Image source={require('./backimg.png')}
                style={{height:22,width:30}} />
               </TouchableOpacity>


               <TouchableOpacity style={{marginLeft:'5%',width:100,marginTop:'46%'}}>

                  <Image source={require('./play.png')}
                   style={{width:100,height:46}}/>

               </TouchableOpacity>

              </ImageBackground>


              <Text style={{fontSize:22,fontFamily:'Exo2-Medium',color:'#000000',marginTop:13,marginLeft:'5%'}}>Hand Walks</Text>

              <Text style={{fontSize:16,fontFamily:'Exo2-Medium',color:'#00000066',marginTop:5,marginLeft:'5%'}}>30 seconds</Text>

              <Text style={{fontSize:20,fontFamily:'Exo2-Medium',color:'#0000004D',marginTop:18,marginLeft:'5%'}}>Level</Text>

              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'76%',marginTop:16,marginLeft:'5%'}}>

              <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:92,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center'}}>
                INTERMEDIATE
              </Button>

              <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:92,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center'}}>
                ADVANCED
              </Button>

              <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:92,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center'}}>
                BEGINNER
              </Button>

              </View>

              <Text style={{fontSize:20,fontFamily:'Exo2-Medium',color:'#0000004D',marginTop:20,marginLeft:'5%'}}>Muscle groups</Text>

              <View style={{flexDirection:'row',alignItems:'center',width:'55%',marginTop:16,marginLeft:'5%'}}>

              <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:92,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center'}}>
                TRICEPS
              </Button>

              <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:92,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center',marginLeft:11}}>
                CHEST
              </Button>

              </View>

              <Text style={{fontSize:20,fontFamily:'Exo2-Medium',color:'#0000004D',marginTop:20,marginLeft:'5%'}}>Equipment Required</Text>

              <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:128,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center',marginLeft:'5%',marginTop:16}}>
                NO EQUIPMENT
              </Button>

              <Button
                style={{fontSize: 18, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:'90%',height:50,borderRadius:3,backgroundColor:'#161718',justifyContent:'center',marginTop:90,marginLeft:'5%'}}>
                Next Exercise
              </Button>


            </View>
         </SafeAreaProvider>
    );
  }
}

export default ExerciseScreen;
