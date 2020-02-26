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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }


  render() {
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
      <SafeAreaProvider>
      <KeyboardAwareScrollView>

      <Image source={require('./propic.png')}
       style={{height:100,width:100,resizeMode:'contain',marginTop:27,alignSelf:'center'}}/>

       <Text style={{fontSize:20,fontFamily:'Exo2-Regular',color:'#161718',alignSelf:'center',marginTop:13}}>Change Photo</Text>

       <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:48,marginLeft:'8%'}}>Name</Text>

       <TextInput
         style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#000000',width:'86%',height:46,marginLeft:'7.2%',marginTop:3}}
         placeholder="shahnawaz"
         placeholderTextColor="#000000"
         maxLength={50}
         onChangeText={(text) => this.setState({name: text})}
         value={this.state.name}
         />

         <View style={{height:2,width:'88%',alignSelf:'center',backgroundColor:'#0000001A'}}>
         </View>

         <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:20,marginLeft:'8%'}}>Gender</Text>

         <TextInput
           style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#000000',width:'86%',height:46,marginLeft:'7.2%',marginTop:3}}
           placeholder="male"
           placeholderTextColor="#000000"
           maxLength={50}
           onChangeText={(text) => this.setState({gender: text})}
           value={this.state.gender}
           />

           <View style={{height:2,width:'88%',alignSelf:'center',backgroundColor:'#0000001A'}}>
           </View>


           <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:20,marginLeft:'8%'}}>Age</Text>

           <TextInput
             style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#000000',width:'86%',height:46,marginLeft:'7.2%',marginTop:3}}
             placeholder="years"
             placeholderTextColor="#000000"
             maxLength={50}
             onChangeText={(text) => this.setState({age: text})}
             value={this.state.age}
             />

             <View style={{height:2,width:'88%',alignSelf:'center',backgroundColor:'#0000001A'}}>
             </View>

             <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:20,marginLeft:'8%'}}>Weight</Text>

             <TextInput
               style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#000000',width:'86%',height:46,marginLeft:'7.2%',marginTop:3}}
               placeholder="kgs"
               placeholderTextColor="#000000"
               maxLength={50}
               onChangeText={(text) => this.setState({age: text})}
               value={this.state.age}
               />

               <View style={{height:2,width:'88%',alignSelf:'center',backgroundColor:'#0000001A'}}>
               </View>


               <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:20,marginLeft:'8%'}}>Height</Text>

               <TextInput
                 style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#000000',width:'86%',height:46,marginLeft:'7.2%',marginTop:3}}
                 placeholder="inchs"
                 placeholderTextColor="#000000"
                 maxLength={50}
                 onChangeText={(text) => this.setState({age: text})}
                 value={this.state.age}
                 />

                 <View style={{height:2,width:'88%',alignSelf:'center',backgroundColor:'#0000001A'}}>
                 </View>


                 <Button
                   style={{fontSize: 18, color: 'white',fontFamily:'Exo2-Medium'}}
                   containerStyle={{height:50,width:'88%',alignSelf:'center',marginTop:70,borderRadius:6,backgroundColor:'#161718',justifyContent:'center'}}>
                   Save
                 </Button>





      </KeyboardAwareScrollView>
      </SafeAreaProvider>
      </View>
    );
  }
}

export default EditScreen;
