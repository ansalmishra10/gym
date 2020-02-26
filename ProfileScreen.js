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
const GLOBAL = require('./Global');

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
     this.state={
       loading:'',
     }
  }

  showLoading() {
this.setState({loading: true})
}

hideLoading() {
this.setState({loading: false})
}


  componentDidMount() {

    alert(JSON.stringify(GLOBAL.user_id))


    this.showLoading()
  fetch('http://139.59.76.223/gym/webservices/getprofile', {
    method: 'POST',
   headers: {
       'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
       'Content-Type': 'application/json'
   },
   body: JSON.stringify({
       user_id: GLOBAL.user_id

   }),
}).then((response) => response.json())
   .then((responseJson) => {

          alert(JSON.stringify(responseJson))
         this.hideLoading()
       if (responseJson.status == true) {
       //     // this.setState({result: responseJson.user_detail })
       //
       //     GLOBAL.user_id = responseJson.user_id
       //
       //      AsyncStorage.setItem('userID', responseJson.user_id);
       //
       //     // AsyncStorage.setItem('image', this.state.results.image);
       //     // AsyncStorage.setItem('name', this.state.results.name);
       //     // AsyncStorage.setItem('email', this.state.results.email);
       //     // AsyncStorage.setItem('mobile', this.state.results.mobile);
       //     this.props.navigation.navigate('HomeScreen')
        }
       else{
           alert('Invalid Credentials!')
       }
   })
   .catch((error) => {
       console.error(error);
   });



  }
  render() {
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
      <SafeAreaProvider>

      <ScrollView>

      <View style={{flexDirection:'row',marginTop:26}}>
       <Image source={require('./propic.png')}
        style={{height:100,width:100,resizeMode:'contain',marginLeft:38}}/>

        <TouchableOpacity style={{width:30,borderRadius:15,marginTop:60,height:30,marginLeft:-18}}
        onPress={()=>this.props.navigation.navigate('EditScreen')}>
        <Image source={require('./edit.png')}
         style={{height:30,width:30,resizeMode:'contain'}} />
        </TouchableOpacity>

      </View>


        <Text style={{fontSize:26,fontFamily:'Exo2-Regular',color:'black',marginLeft:38,marginTop:10}}>Shahnawaz</Text>

        <Text style={{fontSize:19,fontFamily:'Exo2-Regular',color:'black',marginLeft:38,marginTop:7}}>9898989898</Text>

        <ImageBackground source={require('./box.png')}

          style={{width:'100%',height:150,resizeMode:'contain',marginTop:19,shadowColor: '#00000012',shadowOffset: { width: 2, height: 2 },elevation:1}}>

          <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:40,marginLeft:38}}>Name</Text>
          <Text style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#161718',marginTop:3,marginLeft:38}}>Shahnawaz</Text>

        </ImageBackground>

        <ImageBackground source={require('./box.png')}

          style={{width:'100%',height:150,resizeMode:'contain',marginTop:-40,shadowColor: '#00000012',shadowOffset: { width: 2, height: 2 },elevation:1}}>

          <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:40,marginLeft:38}}>Gender</Text>
          <Text style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#161718',marginTop:3,marginLeft:38}}>Male</Text>

        </ImageBackground>

        <ImageBackground source={require('./box.png')}

          style={{width:'100%',height:150,resizeMode:'contain',marginTop:-40,shadowColor: '#00000012',shadowOffset: { width: 2, height: 2 },elevation:1}}>

          <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:40,marginLeft:38}}>Age</Text>
          <Text style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#161718',marginTop:3,marginLeft:38}}>22</Text>

        </ImageBackground>

        <ImageBackground source={require('./box.png')}

          style={{width:'100%',height:150,resizeMode:'contain',marginTop:-40,shadowColor: '#00000012',shadowOffset: { width: 2, height: 2 },elevation:1}}>

          <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:40,marginLeft:38}}>Weight</Text>
          <Text style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#161718',marginTop:3,marginLeft:38}}>64</Text>

        </ImageBackground>

        <ImageBackground source={require('./box.png')}

          style={{width:'100%',height:150,resizeMode:'contain',marginTop:-40,shadowColor: '#00000012',shadowOffset: { width: 2, height: 2 },elevation:1}}>

          <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:40,marginLeft:38}}>Height</Text>
          <Text style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#161718',marginTop:3,marginLeft:38}}>6.2</Text>

        </ImageBackground>


      </ScrollView>
      </SafeAreaProvider>
      </View>
    );
  }
}

export default ProfileScreen;
