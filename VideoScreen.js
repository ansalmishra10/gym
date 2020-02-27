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

class VideoScreen extends React.Component {
  constructor(props) {
    super(props);
     this.state={
       img_change:0,
       button_one:0,
       button_two:0,
       button_three:0,
       showimage: true,
     }
  }





  manageImageVisibility= () => {
    this.setState({ showimage: !this.state.showimage });
  }

  onChangeButton1=()=> {
    this.setState({ button_one:1 });
    this.setState({ button_two:0 });
    this.setState({ button_three:0 });

  }

  onChangeButton2=()=> {

    this.setState({ button_one:0 });
    this.setState({ button_two:1 });
    this.setState({ button_three:0 });

  }

  onChangeButton3=()=> {

    this.setState({ button_one:0 });
    this.setState({ button_two:0 });
    this.setState({ button_three:1 });


  }


  render() {
    return(
         <SafeAreaProvider>
         <View style={{flex:1,backgroundColor:'white'}}>
            <ImageBackground source={require('./videoimg.png')}
             style={{width:'100%',height:Dimensions.get('window').height/2,resizeMode:'cover',backgroundColor:'yellow'}}>

              <TouchableOpacity style={{alignSelf:'flex-end',marginTop:20,marginRight:20}}
              onPress={this.manageImageVisibility}>
              <Image source={(this.state.showimage) ?   require('./whitelike.png') : require('./redheart.png')}
               style={{width:24,height:22,resizeMode:'contain'}}/>
               </TouchableOpacity>

               <Image source={require('./youtube1.png')}
                style={{width:54,height:38,resizeMode:'contain',marginTop:110,alignSelf:'center'}}/>

            </ImageBackground>

            <View style={{flexDirection:'row',marginLeft:'5%',width:'90%',alignItems:'center',justifyContent:'space-between',marginTop:16}}>
            <TouchableOpacity style={{flexDirection:'row',height:42,width:'48%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

              <Image source={require('./dolle.png')}
               style={{width:21,height:22,resizeMode:'contain',marginLeft:8}}/>

               <View style={{flexDirection:'column',marginLeft:24,textAlign:'left'}}>
               <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white'}}>Body Parts</Text>
               <Text style={{fontSize:13,fontFamily:'Exo2-Regular',color:'#FFFFFF66',marginTop:-2}}>Abs</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',height:42,width:'48%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

            <Image source={require('./dumbbel.png')}
             style={{width:24,height:13,resizeMode:'contain',marginLeft:9}}/>

             <View style={{flexDirection:'column',marginLeft:24,textAlign:'left'}}>
             <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white'}}>You Need</Text>
             <Text style={{fontSize:13,fontFamily:'Exo2-Regular',color:'#FFFFFF66',marginTop:-3}}>Yoga Mat</Text>
             </View>

            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginLeft:'5%',width:'90%',alignItems:'center',justifyContent:'space-between',marginTop:25}}>


             { this.state.button_one == 0 && (

             <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
             onPress={()=>this.onChangeButton1()}>

                <Image source={require('./gallery.png')}
                 style={{height:16,width:16,resizeMode:'contain',marginLeft:8}} />

                 <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>IMAGE</Text>
             </TouchableOpacity>

             )}


             { this.state.button_one == 1 && (

               <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

                  <Image source={require('./gallery.png')}
                   style={{height:16,width:16,resizeMode:'contain',marginLeft:8}} />

                   <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>IMAGE</Text>
               </TouchableOpacity>

             )}





             { this.state.button_two == 0 && (

             <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
             onPress={()=>this.onChangeButton2()}>

             <Image source={require('./youtube2.png')}
              style={{height:22,width:16,resizeMode:'contain',marginLeft:8}} />

              <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>VIDEO</Text>

             </TouchableOpacity>

             )}

             { this.state.button_two == 1 && (
               <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

               <Image source={require('./youtube2.png')}
                style={{height:22,width:16,resizeMode:'contain',marginLeft:8}} />

                <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>VIDEO</Text>

               </TouchableOpacity>
             )}





             { this.state.button_three == 0 && (
             <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
             onPress={()=>{ this.onChangeButton3(); this.props.navigation.navigate('NoteScreen'); }}>

             <Image source={require('./note.png')}
              style={{height:17,width:16,resizeMode:'contain',marginLeft:8}} />

              <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>NOTE</Text>

              </TouchableOpacity>

              )}

              { this.state.button_three == 1 && (

                <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

                <Image source={require('./note.png')}
                 style={{height:17,width:16,resizeMode:'contain',marginLeft:8}} />

                 <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>NOTE</Text>

                 </TouchableOpacity>

              )}


            </View>

            <Button
              style={{fontSize: 19, color: '#FFFFFF',fontFamily:'Exo2-Medium'}}
              containerStyle={{height:50,width:'90%',borderRadius:6,backgroundColor:'#161718',justifyContent:'center',position:'absolute',left:'5%',bottom:40}}>
              Download Video
            </Button>




         </View>
         </SafeAreaProvider>
    );
  }
}

export default VideoScreen;
