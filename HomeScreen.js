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


class HomeScreen extends React.Component {
    render() {
    return(

         <SafeAreaProvider>
         <View style={{flex:1}}>
            <Image style={{resizeMode:'contain',height:'70%',width:'70%',marginLeft:'15%',marginTop:'15%'}} source={require('./body.png')}>
            </Image>

            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'20%', left: '27.5%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'24%',borderRadius:1,position:'absolute',top:'21.7%',left: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'19.4%',left:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Shoulders</Text>
            </TouchableOpacity>

            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'23.8%', left: '37.4%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'35%',borderRadius:1,position:'absolute',top:'25.5%',left: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'23.2%',left:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Chest</Text>
            </TouchableOpacity>

            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'25.8%', right: '28.2%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'25%',borderRadius:1,position:'absolute',top:'27.5%',right: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'25.2%',right:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Biceps</Text>
            </TouchableOpacity>


            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'30.8%', left: '21%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'19%',borderRadius:1,position:'absolute',top:'32.5%',left: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'30.2%',left:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Forearm</Text>
            </TouchableOpacity>

            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'31%', right: '42.5%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'40%',borderRadius:1,position:'absolute',top:'32.8%',right: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'30.5%',right:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Abs</Text>
            </TouchableOpacity>

            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'34.6%', left: '37.5%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'35%',borderRadius:1,position:'absolute',top:'36.4%',left: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'34.1%',left:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Obliques</Text>
            </TouchableOpacity>

            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'46.8%', left: '37.5%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'35%',borderRadius:1,position:'absolute',top:'48.5%',left: '6%'}}>
            </View>


              <TouchableOpacity style={{position:'absolute',top:'46.2%',left:'6%'}}>
              <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Quads</Text>
              </TouchableOpacity>



            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'47%', right: '33.5%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'32%',borderRadius:1,position:'absolute',top:'48.8%',right: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'46.4%',right:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Abductors</Text>
            </TouchableOpacity>

            <PulseIndicator color='#242B37' size={30} style={{position: 'absolute' , top:'50%', right: '43.5%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'40%',borderRadius:1,position:'absolute',top:'51.8%',right: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'49.5%',right:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Abductors</Text>
            </TouchableOpacity>



            <TouchableOpacity style={{alignSelf:'flex-end',marginTop:70,marginRight:30}}>
             <Image source={require('./rotate.png')}
             style={{width:70,height:70,resizeMode:'contain'}}/>
            </TouchableOpacity>




         </View>
         </SafeAreaProvider>
    );
  }
}


export default HomeScreen;
