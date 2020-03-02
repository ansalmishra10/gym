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

class WorkScreen extends React.Component {
  constructor(props) {
    super(props);

     this.state={
       FlatListItems: [
    {"key": "#1",
     "add": "Workout",
     "add2": "Full Body",
     "add3": "1",
    },
    {"key": "#2",
     "add": "Workout",
     "add2": "Core",
     "add3": "2",
    },
    {"key": "#3",
     "add": "Workout",
     "add2": "Rest",
     "add3": "3",
    },
    {"key": "#4",
     "add": "Workout",
     "add2": "Fat Burning",
     "add3": "4",
    },
    {"key": "#5",
     "add": "Workout",
     "add2": "Upper Body",
     "add3": "5",
     },
    {"key": "#6",
     "add": "Workout",
     "add2": "Lower Body",
     "add3": "6",
    },
    {"key": "#7",

     "add": "Workout",
     "add2": "Abs",
     "add3": "7",
    },

  ],
}
  }

  renderItem=({item}) => {
return(
  <TouchableOpacity style={{width:'90%',height:66,marginTop:18,marginBottom:2,backgroundColor:'white',elevation:2,borderRadius:6,marginLeft:'5%',shadowColor:'#1617184D',shadowRadius:1}}>

     <View style={{flexDirection:'row',alignItems:'center',marginLeft:16,marginTop:15}}>

        <View style={{height:26,width:26,borderRadius:13,backgroundColor:'#161718',justifyContent:'center'}}>
        <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'white',alignSelf:'center'}}>{item.add3}</Text>
        </View>

        <View style={{flexDirection:'column',marginLeft:10}}>

         <Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#1617184D'}}>{item.add}</Text>
         <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'#161718'}}>{item.add2}</Text>

        </View>




     </View>




  </TouchableOpacity>



 );
}

_keyExtractor=(item, index)=>item.key;

  render() {
    return(
          <SafeAreaProvider>

           <View style={{flex:1,backgroundColor:'white'}}>

           <FlatList style={{flex:1}}
            data={this.state.FlatListItems}

            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
             />

           </View>

          </SafeAreaProvider>
    );
  }
}

export default WorkScreen;
