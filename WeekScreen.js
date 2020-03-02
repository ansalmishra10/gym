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

class WeekScreen extends React.Component {
  constructor(props) {
    super(props);

     this.state={
       FlatListItems: [
    {"key": "#1",
     "add": "Week 1",
     "add2": "7 sessions"
    },
    {"key": "#2",
     "add": "Week 2",
     "add2": "7 sessions"
    },
    {"key": "#3",
     "add": "Week 3",
     "add2": "7 sessions"
    },
    {"key": "#4",
     "add": "Week 4",
     "add2": "7 sessions"
    },
    {"key": "#5",
     "add": "Week 5",
     "add2": "7 sessions"
    },
    {"key": "#6",
     "add": "Week 6",
     "add2": "7 sessions"
    },
    {"key": "#7",
     "add": "Week 7",
     "add2": "7 sessions"
    },
    {"key": "#8",
     "add": "Week 8",
     "add2": "7 sessions"
    },
    {"key": "#9",
     "add": "Week 9",
     "add2": "7 sessions"
    },
    {"key": "#10",
     "add": "Week 10",
     "add2": "7 sessions"
    },

  ],
}
  }

  renderItem=({item}) => {
return(
  <TouchableOpacity style={{width:'90%',height:66,marginTop:18,backgroundColor:'white',elevation:2,borderRadius:6,marginLeft:'5%'}}
   onPress={()=>this.props.navigation.navigate('WorkScreen')}>

     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:16,marginTop:12,width:'32%'}}>

        <Text style={{fontSize:12,fontFamily:'Exo2-SemiBold',color:'#1617184D'}}>{item.add}</Text>

        <Image style={{width:4,height:4,resizeMode:'contain'}}
         source={require('./dot.png')}/>

        <Text style={{fontSize:12,fontFamily:'Exo2-SemiBold',color:'#1617184D'}}>{item.add2}</Text>


     </View>

     <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'#161718',marginLeft:16,marginTop:3}}>{item.add}</Text>


  </TouchableOpacity>



 );
}

  _keyExtractor=(item, index)=>item.key;

  render() {
  return(
          <SafeAreaProvider>
            <View style={{flex:1,backgroundColor:'white'}}>

            <FlatList
             data={this.state.FlatListItems}

             keyExtractor={this._keyExtractor}
             renderItem={this.renderItem}
      />



            </View>
          </SafeAreaProvider>
      );
    }
  }

  export default WeekScreen;
