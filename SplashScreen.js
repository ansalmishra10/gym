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

class SplashScreen extends React.Component {



     componentDidMount () {

     this.timeoutCheck = setTimeout(() => {

       this.props.navigation.navigate('StyleScreen')

     }, 2000);

   }

   render() {
   return (


       <View style={{flex:1}}>

             <ImageBackground
                  source={require('./Splash.png')}
                  style={{height:'100%',width:'100%',resizeMode:'contain'}}>

                  <Text style={{fontSize:30,fontFamily:'Exo2-SemiBold',color:'white',position:'absolute',bottom:'23%',width:'90%',left:'5.5%'}}>Welcome to iwantfitness</Text>
                  <Text style={{fontSize:32,fontFamily:'Exo2-SemiBold',color:'white',position:'absolute',bottom:'18%',width:'70%',left:'5.5%'}}>Let's Go</Text>


            </ImageBackground>

       </View>


   );
 }
}

export default SplashScreen;
