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
   constructor(props) {
     super(props);

      this.state= {
           is_rotated: 0
      }
   }


   onChange=()=>{
     this.setState({ is_rotated: 1 })
   }

   onChange2=()=> {
    this.setState({ is_rotated: 0 })
   }

    render() {
    return(

         <SafeAreaProvider>

     { this.state.is_rotated == 0 && (

         <View style={{flex:1,backgroundColor:'white'}}>




            <Image style={{width:'80%',height:'80%',marginTop:'10%',marginLeft:'10%'}} source={require('./front.jpeg')}>
            </Image>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'22%', left: '28%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'24%',borderRadius:1,position:'absolute',top:'23.6%',left: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'21.3%',left:'6%'}}
            onPress={()=> this.props.navigation.navigate('PartScreen')}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Shoulders</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'25%', left: '38%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'33.8%',borderRadius:1,position:'absolute',top:'26.7%',left: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'24.4%',left:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Chest</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'29%', right: '28%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'23.8%',borderRadius:1,position:'absolute',top:'30.7%',right: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'28.4%',right:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Biceps</Text>
            </TouchableOpacity>


            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'36%', left: '25%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'21%',borderRadius:1,position:'absolute',top:'37.7%',left: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'35.5%',left:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Forearm</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'34%', right: '43%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'38.6%',borderRadius:1,position:'absolute',top:'35.7%',right: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'33.4%',right:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Abs</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'40%', left: '38%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'33.7%',borderRadius:1,position:'absolute',top:'41.8%',left: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'39.6%',left:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Obliques</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'51%', left: '37%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'32.8%',borderRadius:1,position:'absolute',top:'52.7%',left: '6%'}}>
            </View>


              <TouchableOpacity style={{position:'absolute',top:'50.4%',left:'6%'}}>
              <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Quads</Text>
              </TouchableOpacity>



            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'52%', right: '32%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'28%',borderRadius:1,position:'absolute',top:'53.7%',right: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'51.5%',right:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Abductors</Text>
            </TouchableOpacity>

            <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'56%', right: '42%'}}/>

            <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'37.8%',borderRadius:1,position:'absolute',top:'57.7%',right: '6%'}}>
            </View>

            <TouchableOpacity style={{position:'absolute',top:'55.5%',right:'6%'}}>
            <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Abductors</Text>
            </TouchableOpacity>



            <TouchableOpacity style={{alignSelf:'flex-end',marginTop:20,marginRight:32}}
            onPress={()=>this.onChange()}>
             <Image source={require('./rotate.png')}
             style={{width:70,height:70,resizeMode:'contain'}}/>
            </TouchableOpacity>







         </View>

         )}

         { this.state.is_rotated == 1 && (

           <View style={{flex:1,backgroundColor:'white'}}>

           <Image style={{width:'80%',height:'80%',marginTop:'10%',marginLeft:'10%'}} source={require('./back.jpeg')}>
           </Image>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'21.5%', left: '36%'}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'31.8%',borderRadius:1,position:'absolute',top:'23.3%',left: '6%'}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:'21%',left:'6%'}}
           onPress={()=> this.props.navigation.navigate('PartScreen')}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Traps</Text>
           </TouchableOpacity>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'31%', left: '30%'}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'25.8%',borderRadius:1,position:'absolute',top:'32.7%',left: '6%'}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:'30.4%',left:'6%'}}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Triceps</Text>
           </TouchableOpacity>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'28%', right: '34%'}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'29.5%',borderRadius:1,position:'absolute',top:'29.8%',right: '6%'}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:'27.5%',right:'6%'}}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Lats</Text>
           </TouchableOpacity>




           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'39%', right: '44%'}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'39.4%',borderRadius:1,position:'absolute',top:'40.9%',right: '6%'}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:'38.6%',right:'6%'}}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Lower Back</Text>
           </TouchableOpacity>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'56%', left: '40%'}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'35.7%',borderRadius:1,position:'absolute',top:'57.7%',left: '6%'}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:'55.4%',left:'6%'}}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Hamstrings</Text>
           </TouchableOpacity>

           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'67%', left: '38%'}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'33.6%',borderRadius:1,position:'absolute',top:'68.8%',left: '6%'}}>
           </View>


             <TouchableOpacity style={{position:'absolute',top:'66.5%',left:'6%'}}>
             <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Calves</Text>
             </TouchableOpacity>



           <PulseIndicator color='#F9C057' size={30} style={{position: 'absolute' , top:'47%', right: '36%'}}/>

           <View style={{borderWidth:1,borderColor:'#242B37',borderStyle:'dotted',width:'31.8%',borderRadius:1,position:'absolute',top:'48.8%',right: '6%'}}>
           </View>

           <TouchableOpacity style={{position:'absolute',top:'46.6%',right:'6%'}}>
           <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'#161718'}}>Glutes</Text>
           </TouchableOpacity>




           <TouchableOpacity style={{alignSelf:'flex-end',marginTop:20,marginRight:32}}
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
