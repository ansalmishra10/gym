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
  AsyncStorage,
  Dimensions,




  } from 'react-native';

import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';


 class StyleScreen extends React.Component {

     


   
   render() {
     return(

      <View style={{flex:1,flexDirection:'column'}}>

        <Swiper
           onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
           dot={<View style={{backgroundColor: '#ffffff', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5}} />}
           activeDot={<View style={{backgroundColor: '#ffffff', width: 30, height:10, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
            paginationStyle={{position:'absolute',bottom:76,left:'73.5%',width:'20%'}} loop>

           <View style={{flex:1,backgroundColor: 'transparent'}}>
            <Video
            source={require('./splashvideo.mp4')}
            autoplay
            resizeMode="cover"
            style={{position: 'absolute',top: 0, left: 0, bottom: 0, right: 0}}
            repeat = {true}
            />
            

            
            <Text style={{fontSize:32,fontFamily:'Exo2-SemiBold',color:'white',width:'70%',position:'absolute',left:'7%',bottom:230}}>HANDPICKED WORKOUTS</Text>
            <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white',width:'84%',position:'absolute',left:'7%',bottom:159}}>Workout anywhere! Home, Gym or Travel, get the most effective Workout suited to your level of training.</Text>
            <TouchableOpacity style={{height:60,width:150,backgroundColor:'white',borderRadius:10,position:'absolute',left:'7%',bottom:53,justifyContent:'center'}}
            onPress={()=> this.props.navigation.navigate('LoginScreen')}>
            <Text style={{fontSize:17,fontFamily:'Exo2-SemiBold',color:'#161718',alignSelf:'center'}}>Get Started</Text>
            </TouchableOpacity>
            
            
            </View>

           <View style={{flex:1,backgroundColor: 'transparent'}}>
            <Video
               source={require('./nutrition.mp4')}
               resizeMode="cover"
               autoplay
               style={{position: 'absolute',top: 0, left: 0, bottom: 0, right: 0}}
               repeat = {true}
               />


            
            
            <Text style={{fontSize:32,fontFamily:'Exo2-SemiBold',color:'white',width:'70%',position:'absolute',left:'7%',bottom:230}}>NUTRITION</Text>
            <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white',width:'84%',position:'absolute',left:'7%',bottom:159}}>Get Personalised meal plans and Recipes suited to your need, all created by our in-house certified nutritionists and dieticians.</Text>
            <TouchableOpacity style={{height:60,width:150,backgroundColor:'white',borderRadius:10,position:'absolute',left:'7%',bottom:53,justifyContent:'center'}}
            onPress={()=> this.props.navigation.navigate('LoginScreen')}>

            <Text style={{fontSize:17,fontFamily:'Exo2-SemiBold',color:'#161718',alignSelf:'center'}}>Get Started</Text>
            </TouchableOpacity>



            
           </View>

           <View style={{backgroundColor: 'transparent'}}>

            <ImageBackground style={{resizeMode:'cover',height:'100%',width:'100%'}} source={require('./style3.jpeg')}>

             
            <Text style={{fontSize:32,fontFamily:'Exo2-SemiBold',color:'white',width:'70%',position:'absolute',left:'7%',bottom:230}}>RELAX AND REPAIR</Text>
            <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white',width:'84%',position:'absolute',left:'7%',bottom:159}}>Dive into your strongest soul and the freshest mind with our Relaxation Techniques and Yoga Programmes.</Text>
            <TouchableOpacity style={{height:60,width:150,backgroundColor:'white',borderRadius:10,position:'absolute',left:'7%',bottom:53,justifyContent:'center'}}
            onPress={()=> this.props.navigation.navigate('LoginScreen')}>
            <Text style={{fontSize:17,fontFamily:'Exo2-SemiBold',color:'#161718',alignSelf:'center'}}>Get Started</Text>
            </TouchableOpacity>
            

           </ImageBackground>

           </View>





         </Swiper>



      </View>
     );
   }
 }

 export default StyleScreen;
