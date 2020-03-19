
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
import ImagePicker from 'react-native-image-picker';
const GLOBAL = require('./Global');

class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender:'',
      age:'',
      weight:'',
      height:'',
      avatarSource: GLOBAL.profilepic,
     imageget:0,

    }
     this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }


   selectPhotoTapped=()=> {

 const options = {
 title: 'Select Avatar',

 storageOptions: {
   skipBackup: true,
   path: 'images',
 },
};

ImagePicker.showImagePicker(options, (response) => {
console.log('Response = ', response);

if (response.didCancel) {
  console.log('User cancelled image picker');
} else if (response.error) {
  console.log('ImagePicker Error: ', response.error);
} else if (response.customButton) {
  console.log('User tapped custom button: ', response.customButton);
} else {
  const source = { uri: response.uri };

   GLOBAL.profilepic = response.uri
   alert(GLOBAL.profilepic)
//    alert(JSON.stringify(source))
  this.setState({
   avatarSource: source,
 });
 this.setState({imageget :1})
}
});
}

  buttonClickListener = () =>{




  if (this.state.name=='') {
     alert('Enter Name')
  }
  else if (this.state.gender=='') {
     alert('Enter Your Gender')
  }
  else if (this.state.age=='') {
     alert('Enter Your Age')
  }
   else if (this.state.weight=='') {
     alert('Enter Your Weight')
  }
  else if (this.state.height=='') {
     alert('Enter Your Height')
  }


  else {

    const url = 'http://pumpfit.in/admin/webservices/edit_user_profile'
          const data = new FormData();
          data.append('user_id', GLOBAL.user_id);
          data.append('name', this.state.name);
          data.append('email_id', GLOBAL.email);
          data.append('height', this.state.height);
          data.append('weight', this.state.weight);
          data.append('age', this.state.age);
          data.append('flag', this.state.imageget);
          

          
          data.append('image', {
              uri: GLOBAL.profilepic,
              type: 'image/jpeg', // or photo.type
              name: 'image.png'
          });
         
          console.log(JSON.stringify(data))
          fetch(url, {
              method: 'post',
              body: data,
              headers: {
                  'x-api-key':'c3a3cf7c211b7c07b2495d8aef9761fc',
                  'Content-Type': 'application/x-www-form-urlencoded'
              }

          }).then((response) => response.json())
              .then((responseJson) => {
                  //       this.hideLoading()

                   alert(JSON.stringify(responseJson))
                   this.props.navigation.goBack()


               //   alert('Status successfully Uploaded')



              });
      }
  }

   

  render() {
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
      <SafeAreaProvider>
      <KeyboardAwareScrollView>
      
      {this.state.imageget==0 && (
       
       <TouchableOpacity style={{marginTop:27,alignSelf:'center'}} onPress={this.selectPhotoTapped.bind(this)}> 
      <Image source={require('./propic.png')}
       style={{height:100,width:100,borderRadius:50}}/>
       </TouchableOpacity>

      )} 

      {this.state.imageget==1 && (

      
       <TouchableOpacity style={{marginTop:27,alignSelf:'center'}}>
        <Image source={this.state.avatarSource}
       style={{height:100,width:100,alignSelf:'center',borderRadius:50}}/>
       </TouchableOpacity>

       )}

       <Text style={{fontSize:20,fontFamily:'Exo2-Regular',color:'#161718',alignSelf:'center',marginTop:13}}>Change Photo</Text>

       <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:48,marginLeft:'8%'}}>Name</Text>

       <TextInput
         style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#000000',width:'86%',height:46,marginLeft:'7.2%',marginTop:3}}
         placeholder="name"
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
           placeholder="male/female"
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
               onChangeText={(text) => this.setState({weight: text})}
               value={this.state.weight}
               />

               <View style={{height:2,width:'88%',alignSelf:'center',backgroundColor:'#0000001A'}}>
               </View>


               <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#00000050',marginTop:20,marginLeft:'8%'}}>Height</Text>

               <TextInput
                 style={{fontSize:21,fontFamily:'Exo2-Regular',color:'#000000',width:'86%',height:46,marginLeft:'7.2%',marginTop:3}}
                 placeholder="inchs"
                 placeholderTextColor="#000000"
                 maxLength={50}
                 onChangeText={(text) => this.setState({height: text})}
                 value={this.state.height}
                 />

                 <View style={{height:2,width:'88%',alignSelf:'center',backgroundColor:'#0000001A'}}>
                 </View>


                 <Button
                   style={{fontSize: 18, color: 'white',fontFamily:'Exo2-Medium'}}
                   containerStyle={{height:50,width:'88%',alignSelf:'center',marginTop:70,borderRadius:6,backgroundColor:'#161718',justifyContent:'center'}}
                   onPress={this.buttonClickListener}>
                   Save
                 </Button>





      </KeyboardAwareScrollView>
      </SafeAreaProvider>
      </View>
    );
  }
}

export default EditScreen;
