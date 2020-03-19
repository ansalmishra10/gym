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
import Header from 'react-native-custom-headers';

class WeekScreen extends React.Component {
  constructor(props) {
    super(props);

     this.state={
       FlatListItems: [
    {"key": "#1",
     "add": "1",
     "add2": "7 sessions"
    },
    {"key": "#2",
     "add": "2",
     "add2": "7 sessions"
    },
    {"key": "#3",
     "add": "3",
     "add2": "7 sessions"
    },
    {"key": "#4",
     "add": "4",
     "add2": "7 sessions"
    },
    {"key": "#5",
     "add": "5",
     "add2": "7 sessions"
    },
    {"key": "#6",
     "add": "6",
     "add2": "7 sessions"
    },
    {"key": "#7",
     "add": "7",
     "add2": "7 sessions"
    },
    {"key": "#8",
     "add": "8",
     "add2": "7 sessions"
    },
    

  ],
}
  }

   

  transfer=(add)=> {
      GLOBAL.week = add
      this.props.navigation.navigate('WorkScreen')
   }

  renderItem=({item,index}) => {
//alert(index);
    var a = parseInt(GLOBAL.weeks)
    var b = "0"
    if (index < a){
           b = "0"
    }else{
      b = "1"
    }


   
    

return(

<View>
{b == "0" && (
   <TouchableOpacity style={{width:'90%',height:66,marginTop:18,marginBottom:2,backgroundColor:'white',elevation:2,borderRadius:6,marginLeft:'5%'}}
    onPress={()=>this.transfer(item.add)}>

     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:16,marginTop:12,width:'32%'}}>

        <Text style={{fontSize:12,fontFamily:'Exo2-SemiBold',color:'#1617184D'}}>Week {item.add}</Text>

        <Image style={{width:4,height:4,resizeMode:'contain'}}
         source={require('./dot.png')}/>

        <Text style={{fontSize:12,fontFamily:'Exo2-SemiBold',color:'#1617184D'}}>7 sessions</Text>


     </View>

     <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'#161718',marginLeft:16,marginTop:3}}>Week {item.add}</Text>


  </TouchableOpacity>

  )}

  {b == "1" && (
    <View>
    </View>
  )}
  
  </View>



 );
}

  


  _keyExtractor=(item, index)=>item.key;

  render() {
  return(
          <SafeAreaProvider>
          <Header navigation={this.props.navigation}
          showHeaderImage={false}
          headerColor ={'#161718'}
          backImagePath={require('./arrowlogo2.png')}
          headerName={'No Equipment Home Beginner'}
          headerTextStyle={{fontFamily:'Gilroy-Bold', color:'white',marginLeft:10}} />

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

  export default WeekScreen;
