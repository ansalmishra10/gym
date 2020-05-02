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
  import {withNavigationFocus} from 'react-navigation';
 import { BackHandler } from 'react-native';
import React, {Component} from 'react';
var b = 0;
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';


class HomeScreen extends React.Component {
   constructor(props) {
     super(props);

      this.state= {
           is_rotated: 0
      }
   }

   handleBackButton = () => {


     if (b == 0){
      BackHandler.exitApp()
     }


}



   onChange=()=>{
     this.setState({ is_rotated: 1 })
   }
   componentDidMount(){
     // alert(JSON.stringify(GLOBAL.user_id))
       BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  this._unsubscribe = this.props.navigation.addListener('focus', () => {
b = 0;
  })
  this._unsubscribe = this.props.navigation.addListener('blur', () => {
 b = 1;
  })
      }
      componentWillUnmount(){
   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
   }
   setValue =(type) =>{
     GLOBAL.category = type
     this.props.navigation.navigate('PartScreen')
   }

   onChange2=()=> {
    this.setState({ is_rotated: 0 })
   }

    render() {
    return(

      <SafeAreaProvider>
                   <StatusBar backgroundColor="black" barStyle="light-content" />

            <View style = {{height:70,backgroundColor:'black',flexDirection:'row',width:'100%',alignItems:'center'}}>
                        <View>
                        <TouchableOpacity onPress= {()=>this.handleBackButton()}>
                            <Image
                                source={require('./arrowlogo2.png')}
                                style={{width: 18, height: 20,marginLeft:20,resizeMode:'contain'}}


                            />
                        </TouchableOpacity>
                        </View>


                        <Text style = {{color:'white',fontFamily:'Exo2-Bold',fontSize: 20,marginLeft:20}}>
                            Home
                        </Text>


                        

                    </View>
          

     

     { this.state.is_rotated == 0 && (

         <View style={{flex:1,backgroundColor:'white'}}>




            <Image style={{width:'78%',height:'78%',marginTop:'11%',marginLeft:'11%'}} source={require('./front.jpeg')}>
            </Image>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:149, left: 133}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:119,borderRadius:1,position:'absolute',top:163,left:22}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:146,left:22}}
            onPress={()=> this.setValue('Shoulders')}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Shoulders</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:175, left: 155}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:140,borderRadius:1,position:'absolute',top:188.5,left: 22}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:172,left:22}}
            onPress={()=> this.setValue('Chest')}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Chest</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:203, right: 122}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:107,borderRadius:1,position:'absolute',top:217,right: 22}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:200.4,right:22}}
      onPress={()=> this.setValue('Biceps')}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Biceps</Text>
            </TouchableOpacity>


            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:252, left: 115}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:100,borderRadius:1,position:'absolute',top:266,left: 22}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:249.4,left:22}}
                onPress={()=> this.setValue('Forearm')}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Forearm</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:238.4, right: 172}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:157,borderRadius:1,position:'absolute',top:253,right: 22}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:236,right:22}}
              onPress={()=> this.setValue('Abs')}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Abs</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:274, left:149}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:134.5,borderRadius:1,position:'absolute',top:288.5,left: 22}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:271.7,left:22}}
                  onPress={()=> this.setValue('Obliques')}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Obliques</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:351.5, left: 146}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:130,borderRadius:1,position:'absolute',top:365.6,left: 22}}>
            </View>


              <TouchableOpacity style={{position:'absolute',top:348.5,left:22}}
                    onPress={()=> this.setValue('Quads')}>
              <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Quads</Text>
              </TouchableOpacity>





            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:372, right: 156}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:141,borderRadius:1,position:'absolute',top:386.5,right: 22}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:370,right:22}}
                    onPress={()=> this.setValue('Abductors')}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Abductors</Text>
            </TouchableOpacity>



            <TouchableOpacity style={{alignSelf:'flex-end',marginTop:16,marginRight:21}}
            onPress={()=>this.onChange()}>
             <Image source={require('./rotate.png')}
             style={{width:70,height:70,resizeMode:'contain'}}/>
            </TouchableOpacity>


            <TouchableOpacity style={{position:'absolute',bottom:50,left:22}}
                    onPress={()=> this.setValue('Hiit/cardio')}>

            <Text style={{fontSize:20,fontFamily:'Exo2-Bold',color:'#161718',borderBottomWidth:2}}>HIIT/CARDIO</Text>
            </TouchableOpacity>



         </View>

         )}

         { this.state.is_rotated == 1 && (

           <View style={{flex:1,backgroundColor:'white'}}>

           <Image style={{width:'78%',height:'78%',marginTop:'11%',marginLeft:'11%',resizeMode:'contain'}} source={require('./back.jpeg')}>
           </Image>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:150, left: 145}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:130,borderRadius:1,position:'absolute',top:164.5,left: 22}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:147.8,left:22}}
                    onPress={()=> this.setValue('Traps')}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Traps</Text>
           </TouchableOpacity>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:220, left: 120}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:105,borderRadius:1,position:'absolute',top:233,left:22}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:216,left:22}}
                          onPress={()=> this.setValue('Triceps')}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Triceps</Text>
           </TouchableOpacity>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:201.5, right: 133}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:117,borderRadius:1,position:'absolute',top:215.5,right:22}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:198.5,right:22}}
                    onPress={()=> this.setValue('Lats')}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Lats</Text>
           </TouchableOpacity>




           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:270, right: 175}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:160,borderRadius:1,position:'absolute',top:285,right:22}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:268,right:22}}
                onPress={()=> this.setValue('Lower Back')}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Lower Back</Text>
           </TouchableOpacity>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , bottom:278, left:155.5}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:142,borderRadius:1,position:'absolute',bottom:292.6,left:22}}>
           </View>

           <TouchableOpacity style={{position:'absolute',bottom:292.5,left:22}}
                  onPress={()=> this.setValue('Hamstrings')}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Hamstrings</Text>
           </TouchableOpacity>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , bottom:205, left: 148}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:134,borderRadius:1,position:'absolute',bottom:218.5,left: 22}}>
           </View>


             <TouchableOpacity style={{position:'absolute',bottom:218,left:22}}
                  onPress={()=> this.props.navigation.navigate('PartScreen',"Calves")}>
             <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Calves</Text>
             </TouchableOpacity>



           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:340, right:140}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:122,borderRadius:1,position:'absolute',top:354.5,right: 22}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:337.5,right:22}}
                    onPress={()=> this.setValue('Glutes')}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Glutes</Text>
           </TouchableOpacity>




           <TouchableOpacity style={{alignSelf:'flex-end',marginTop:16,marginRight:21}}
           onPress={()=>this.onChange2()}>
            <Image source={require('./rotate.png')}
            style={{width:70,height:70,resizeMode:'contain'}}/>
           </TouchableOpacity>




           </View>

         )}
         
          
         </SafeAreaProvider>
    );
  }
}

export default HomeScreen;

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