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
  ActivityIndicator,




  } from 'react-native';

import React, {Component} from 'react';

class PremiumScreen extends React.Component {
    render() {
    return(
          <View style={{flex:1}}>
          <ImageBackground style={{resizeMode:'contain',height:'100%',width:'100%'}} source={require('./premium.png')}>

          <View style={{flex:4}}>

          <Image style={{height:16,width:16,alignSelf:'flex-end',marginTop:'9.5%',marginRight:'5%'}}
             source={require('./close.png')}/>


             <Text style={{fontSize:33,fontFamily:'Exo2-Medium',color:'white',width:'76%',alignSelf:'center',textAlign:'center',marginTop:'31.5%'}}>Commit to Yourself</Text>
             <Text style={{fontSize:13,fontFamily:'Exo2-Medium',color:'#8F92A1',width:'55%',alignSelf:'center',textAlign:'center',marginTop:10}}>dedication leads to success choose a plan commit to your goals .</Text>

          </View>

          <View style={{flex:3}} >

          <Text style={{fontSize:13,fontFamily:'Exo2-Medium',color:'#8F92A1',alignSelf:'center',textAlign:'center',marginTop:22}}>Get your personal trainer & unlock all workouts.</Text>

          <TouchableOpacity style={{flexDirection:'row',height:54,width:'90%',borderRadius:7,borderWidth:1.5,borderColor:'#616161',marginTop:25,alignSelf:'center',alignItems:'center',justifyContent:'space-between',backgroundColor:'transparent'}}>

           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginLeft:22}}>7 Days trial</Text>
           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginRight:17}}>Free</Text>

          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row',height:54,width:'90%',borderRadius:7,borderWidth:1.5,borderColor:'#616161',marginTop:10,alignSelf:'center',alignItems:'center',justifyContent:'space-between',backgroundColor:'transparent'}}>

           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginLeft:22}}>1 Month</Text>
           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginLeft:'24%',textDecorationLine: 'line-through'}}>₹ 599.00</Text>
           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginRight:17}}>₹ 399.00</Text>

          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row',height:54,width:'90%',borderRadius:7,borderWidth:1.5,borderColor:'#616161',marginTop:10,alignSelf:'center',alignItems:'center',justifyContent:'space-between',backgroundColor:'transparent'}}>

           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginLeft:22}}>6 Months</Text>
           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginLeft:'20.5%',textDecorationLine: 'line-through'}}>₹ 899.00</Text>
           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginRight:17}}>₹ 699.00</Text>

          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row',height:54,width:'90%',borderRadius:7,borderWidth:1.5,borderColor:'#616161',marginTop:10,alignSelf:'center',alignItems:'center',justifyContent:'space-between',backgroundColor:'transparent'}}>

           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginLeft:22}}>12 Months</Text>
           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginLeft:'17%',textDecorationLine: 'line-through'}}>₹ 1299.00</Text>
           <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'white',marginRight:17}}>₹ 999.00</Text>

          </TouchableOpacity>



          </View>

          </ImageBackground>
          </View>
    );
  }
}

 export default PremiumScreen;
