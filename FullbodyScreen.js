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

class FullbodyScreen extends React.Component {
constructor(props) {
 super(props);

      this.state={
        FlatListItems: [
     {"key": "#1",
      "add": "Hand Walks",
      "add2": "30 seconds",
      "add3": require('./partsimg.png'),
     },
     {"key": "#2",
      "add": "Low Plank to High Plank",
      "add2": "30 seconds",
      "add3": require('./partsimg2.png'),
     },
     {"key": "#3",
      "add": "Butterflies",
      "add2": "15 seconds",
      "add3": require('./partsimg.png'),
     },
     {"key": "#4",
      "add": "Jumping Jacks",
      "add2": "30 seconds",
      "add3": require('./partsimg2.png'),
     },
     {"key": "#5",
      "add": "Decline Push Up",
      "add2": "12 reps",
      "add3": require('./partsimg.png'),
      },


   ],
 }
   }


   renderItem=({item}) => {
 return(
   <TouchableOpacity style={{width:'90%',marginTop:20,marginLeft:'5%'}}
   onPress={()=>this.props.navigation.navigate('ExerciseScreen')}>

      <View style={{flexDirection:'row'}}>

         <Image source={item.add3}
          style={{width:90,height:58,resizeMode:'contain'}}/>

          <View style={{flexDirection:'column',marginLeft:19}}>

          <Text style={{fontSize:19,fontFamily:'Exo2-Medium',color:'#161718'}}>{item.add}</Text>
          <Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#00000066',marginTop:4}}>{item.add2}</Text>

         </View>




      </View>




   </TouchableOpacity>



  );
 }

 _keyExtractor=(item, index)=>item.key;

  render() {
  return(
          <SafeAreaProvider>
            <View style={{backgroundColor:'white'}}>

              <ImageBackground source={require('./chinup.png')}
                style={{width:'100%',height:Dimensions.get('window').height/2-100,resizeMode:'contain'}}>

                <TouchableOpacity style={{marginTop:22,marginLeft:10,width:22}}>
                <Image source={require('./backimg.png')}
                 style={{height:22,width:30}} />
                </TouchableOpacity>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:'5%',marginTop:160,width:'26%',justifyContent:'space-between'}}>

                   <Text style={{fontSize:12,fontFamily:'Exo2-SemiBold',color:'#ffffff99'}}>Week 1</Text>

                   <Image style={{width:3,height:3,resizeMode:'contain',marginTop:1}}
                    source={require('./dot1.png')}/>

                   <Text style={{fontSize:12,fontFamily:'Exo2-SemiBold',color:'#ffffff99'}}>Workout</Text>


                </View>

                <Text style={{fontSize:21,fontFamily:'Exo2-Medium',color:'#FFFFFF',marginTop:8,marginLeft:'5%'}}>Full Body</Text>


            </ImageBackground>

            <FlatList style={{height:'50%'}}
             data={this.state.FlatListItems}

             keyExtractor={this._keyExtractor}
             renderItem={this.renderItem}
              />


             
              <Button
                style={{fontSize: 18, color: 'white',fontFamily:'Exo2-Medium',paddingBottom:3}}
                containerStyle={{width:'90%',height:50,borderRadius:6,backgroundColor:'#161718',justifyContent:'center',marginTop:35,marginLeft:'5%'}}>
                Start Workout
              </Button>




            </View>
          </SafeAreaProvider>
  );
  }
}

export default FullbodyScreen;
