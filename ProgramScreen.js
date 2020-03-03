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

class ProgramScreen extends React.Component {
  constructor(props) {
    super(props)
     this.state={

       FlatListItems: [
    {"key": "#1",
     "add": "BEGINNER",
     "add2": "Pullover Technique Guide",
     "add3": require('./thmb5.png'),
     "image_type": 1,
     "add4": require('./memlock.png'),
    },
    {"key": "#2",
     "add": "ADVANCED",
     "add2": "Handstand Technique Guide",
     "add3": require('./thmb6.png'),
     "image_type": 0,

    },




  ],

  FlatListItems1: [
{"key": "#1",
"add": "BEGINNER",
"add2": "Pullover Technique Guide",
"add3": require('./thmb5.png'),
"image_type": 1,
"add4": require('./memlock.png'),
},
{"key": "#2",
"add": "ADVANCED",
"add2": "Handstand Technique Guide",
"add3": require('./thmb6.png'),
"image_type": 0,

},




],


}
  }


  renderItem=({item}) => {
return(

  <TouchableOpacity>
   <ImageBackground source={item.add3}
    style={{width:220,height:120}}>

    <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

    <Button
      style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
      containerStyle={{width:75,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
      {item.add}
    </Button>

    <Image source={ item.add4}
     style={{width:16,height:20}}/>
    </View>

    <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>No Equipment Home Beginner</Text>
   </ImageBackground>

  </TouchableOpacity>


 )
}

_keyExtractor=(item, index)=>item.key;


renderItem2=({item}) => {
return(

<TouchableOpacity>
 <ImageBackground source={item.add3}
  style={{width:220,height:120}}>

  <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

  <Button
    style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
    containerStyle={{width:75,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
    {item.add}
  </Button>

  <Image source={ item.add4}
   style={{width:16,height:20}}/>
  </View>

  <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>No Equipment Home Beginner</Text>
 </ImageBackground>

</TouchableOpacity>


)
}

_keyExtractor2=(item, index)=>item.key;

  render() {
    return(
         <SafeAreaProvider>
           <View style={{backgroundColor:'white'}}>

            <View style={{flexDirection:'row',width:'90%',marginTop:20,marginLeft:'5%',alignItems:'center',justifyContent:'space-between'}}>

            <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718'}}>Programs</Text>

            <Button
              style={{fontSize: 12, color: '#161718',fontFamily:'Exo2-Medium'}}>
              View All
            </Button>

            </View>

            <View style={{marginLeft:10,marginTop:6}}>
            <FlatList
             data={this.state.FlatListItems}
             horizontal={true}
             keyExtractor={this._keyExtractor}
             renderItem={this.renderItem}
             />
             </View>


             <View style={{flexDirection:'row',width:'90%',marginTop:13,marginLeft:'5%',alignItems:'center',justifyContent:'space-between'}}>

             <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718'}}>Technique Guides</Text>

             <Button
               style={{fontSize: 12, color: '#161718',fontFamily:'Exo2-Medium'}}>
               View All
             </Button>

             </View>


             <View style={{marginLeft:10,marginTop:6}}>
             <FlatList
              data={this.state.FlatListItems}
              horizontal={true}
              keyExtractor={this._keyExtractor}
              renderItem={this.renderItem}
              />
              </View>



           </View>
         </SafeAreaProvider>
    );
  }
}

export default ProgramScreen;
