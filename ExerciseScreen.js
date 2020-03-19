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
import VideoPlayer from 'react-native-video-controls';

class ExerciseScreen extends React.Component {

  


  render() {
     var str = GLOBAL.worklevel
      var res = str.split(",");

      const renderedButtons =  res.map((b, index) => {
         return <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:92,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center',marginLeft:12}}>
                {b}
                </Button>
         
       })


      var str2 = GLOBAL.workgrp
      var news = str2.split(",");

      const renderedButton1 =  news.map((a, index) => {
         return <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:92,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center',marginLeft:12}}>
                {a}
                </Button>
         
       }) 

    return(
         <SafeAreaProvider>
            <View style={{backgroundColor:'white'}}>

              
             <View  style={{width:'100%',height:Dimensions.get('window').height/2-80,resizeMode:'contain'}}>
               <VideoPlayer
                source={{ uri:GLOBAL.workvideo }}
                navigator={ this.props.navigator }
                onBack={()=>this.props.navigation.goBack()}
                />
             </View>



               


               

              

              <Text style={{fontSize:22,fontFamily:'Exo2-Medium',color:'#000000',marginTop:13,marginLeft:'5%'}}>{GLOBAL.workname2}</Text>

              <Text style={{fontSize:16,fontFamily:'Exo2-Medium',color:'#00000066',marginTop:5,marginLeft:'5%'}}>{GLOBAL.worktime} seconds</Text>

              <Text style={{fontSize:20,fontFamily:'Exo2-Medium',color:'#0000004D',marginTop:18,marginLeft:'5%'}}>Level</Text>

              <View style={{flexDirection:'row',alignItems:'center',width:'80%',marginTop:16,marginLeft:7}}>
               {renderedButtons}
              

              </View>

              <Text style={{fontSize:20,fontFamily:'Exo2-Medium',color:'#0000004D',marginTop:20,marginLeft:'5%'}}>Muscle groups</Text>

              <View style={{flexDirection:'row',alignItems:'center',width:'90%',marginTop:16,marginLeft:7}}>

                {renderedButton1}

              </View>

              <Text style={{fontSize:20,fontFamily:'Exo2-Medium',color:'#0000004D',marginTop:20,marginLeft:'5%'}}>Equipment Required</Text>

              <Button
                style={{fontSize: 12, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:128,height:28,borderRadius:3,backgroundColor:'#161718',justifyContent:'center',marginLeft:'5%',marginTop:16}}>
                {GLOBAL.workequip}
              </Button>

              <Button
                style={{fontSize: 18, color: 'white',fontFamily:'Exo2-Medium'}}
                containerStyle={{width:'90%',height:50,borderRadius:3,backgroundColor:'#161718',justifyContent:'center',marginTop:90,marginLeft:'5%'}}
                onPress={()=>this.props.navigation.goBack()}>
                Next Exercise
              </Button>


            </View>
         </SafeAreaProvider>
    );
  }
}

export default ExerciseScreen;
