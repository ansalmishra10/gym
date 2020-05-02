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
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loader from './Loader.js';
import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';

class FullbodyScreen extends React.Component {
constructor(props) {
 super(props);

      this.state={
        loading:'',
        name:'',
        images: '',

        FlatListItems: [],
 }
   }

   showLoading() {

    this.setState({loading: true})
   }

    hideLoading() {
    this.setState({loading: false})
   }

navigate=(video, level, muscle_group, equipment_required, work_out_name, duration)=> {
    GLOBAL.workname2 = work_out_name
    GLOBAL.worktime = duration
    GLOBAL.workvideo = video
    GLOBAL.worklevel = level
    GLOBAL.workgrp = muscle_group
    GLOBAL.workequip = equipment_required
  this.props.navigation.navigate('ExerciseScreen')

}



   renderItem=({item}) => {
 return(
   <TouchableOpacity style={{width:'90%',marginTop:20,marginLeft:'5%'}}
   onPress={()=>this.navigate(item.video, item.level, item.muscle_group, item.equipment_required, item.work_out_name, item.duration)}>

      <View style={{flexDirection:'row'}}>

         <Image source={{ uri: item.image}}
          style={{width:90,height:58,borderRadius:8}}/>

          <View style={{flexDirection:'column',marginLeft:19}}>

          <Text style={{fontSize:19,fontFamily:'Exo2-Medium',color:'#161718'}}>{item.work_out_name}</Text>
          <Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#00000066',marginTop:4}}>{item.duration} </Text>

         </View>




      </View>




   </TouchableOpacity>



  );
 }

  componentDidMount() {


    this.showLoading()
       fetch('http://pumpfit.in/admin/webservices/getExercise', {
         method: 'POST',
        headers: {
            'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: GLOBAL.user_id,
            week: GLOBAL.week,
            package_id: GLOBAL.package_id,
            work_out_type: GLOBAL.workid

        }),
    }).then((response) => response.json())
        .then((responseJson) => {

            //    alert(JSON.stringify(responseJson))

              this.hideLoading()
              if (responseJson.status == true) {
                  this.setState({FlatListItems: responseJson.workout})


              }
              else{
              //   alert('Invalid Credentials!')
              }
        })
        .catch((error) => {
            console.error(error);
        });
}

 _keyExtractor=(item, index)=>item.key;

  render() {
     if(this.state.loading){
            return(
                <Loader>

                </Loader>

            )
        }
  return(
    <SafeAreaProvider>
                    <StatusBar backgroundColor="black" barStyle="light-content" />

                    

                    
            <View style={{flex:1,backgroundColor:'white'}}>

              <ImageBackground source={{ uri: GLOBAL.workimage }}
                style={{width:'100%',height:Dimensions.get('window').height/2-100,resizeMode:'contain'}}>



                <View style={{flexDirection:'row',alignItems:'center',marginLeft:'5%',marginTop:205,width:'26%',justifyContent:'space-between'}}>

                   <Text style={{fontSize:12,fontFamily:'Exo2-SemiBold',color:'#ffffff99'}}>Week {GLOBAL.week}</Text>

                   <Image style={{width:3,height:3,resizeMode:'contain',marginTop:1}}
                    source={require('./dot1.png')}/>

                   <Text style={{fontSize:12,fontFamily:'Exo2-SemiBold',color:'#ffffff99'}}>Workout</Text>


                </View>

                <Text style={{fontSize:21,fontFamily:'Exo2-Medium',color:'#FFFFFF',marginTop:8,marginLeft:'5%'}}>{GLOBAL.workname}</Text>


            </ImageBackground>

            <FlatList style={{height:'50%'}}
             data={this.state.FlatListItems}

             keyExtractor={this._keyExtractor}
             renderItem={this.renderItem}
              />








            </View>
            
          </SafeAreaProvider>
  );
  }
}

export default FullbodyScreen;
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor :'white',

    },
    containers: {

        backgroundColor :'white'
    },
    AndroidSafeArea: {
       flex: 0,
       backgroundColor:'black',
       paddingTop: Platform.OS === "android" ? 0 : 0
   },
    loading: {
        position: 'absolute',
        left: window.width/2 - 30,

        top: window.height/2,

        opacity: 0.5,

        justifyContent: 'center',
        alignItems: 'center'
    },

})