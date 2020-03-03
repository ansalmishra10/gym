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

class LibraryScreen extends React.Component {
  constructor(props) {
    super(props)
     this.state={
       search:'',
       FlatListItems: [
    {"key": "#1",
     "add": "BEGINNER",
     "add2": "Pullover Technique Guide",
     "add3": require('./thmb1.png'),
     "image_type": 1,
     "add4": require('./memlock.png'),
    },
    {"key": "#2",
     "add": "BEGINNER",
     "add2": "Handstand Technique Guide",
     "add3": require('./thmb2.png'),
     "image_type": 0,

    },
    {"key": "#3",
     "add": "INTERMEDIATE",
     "add2": "Muscle Up Technique Guide",
     "add3": require('./thmb3.png'),
     "image_type": 1,
     "add4": require('./memlock.png'),
    },
    {"key": "#4",
     "add": "INTERMEDIATE",
     "add2": "Handstand Press",
     "add3": require('./thmb4.png'),
     "image_type": 0,

    },



  ],
}
  }

  renderItem=({item}) => {
return(
  <TouchableOpacity style={{width:'90%',marginTop:20,marginLeft:'5%'}}
  onPress={()=>this.props.navigation.navigate('ExerciseScreen')}>

    {item.image_type==1 && (
     <ImageBackground source={item.add3}
      style={{width:'100%',height:150,borderRadius:10}}>


      <View style={{flexDirection:'row',width:'90%',marginLeft:'5%',marginTop:20,alignItems:'center',justifyContent:'space-between'}}>

      <Button
        style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
        containerStyle={{width:78,height:24,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
        {item.add}
      </Button>

      <Image source={ item.add4}
       style={{width:19,height:25}}/>
      </View>

      <Text style={{fontSize:22,fontFamily:'Exo2-Medium',color:'white',marginLeft:'5%',marginTop:40}}>{item.add2}</Text>

     </ImageBackground>

     )}

     {item.image_type==0 && (

       <ImageBackground source={item.add3}
        style={{width:'100%',height:150,borderRadius:10}}>



        <Button
          style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
          containerStyle={{width:78,height:24,borderRadius:3,backgroundColor:'white',justifyContent:'center',marginLeft:'5%',marginTop:20}}>
          {item.add}
        </Button>




        <Text style={{fontSize:22,fontFamily:'Exo2-Medium',color:'white',marginLeft:'5%',marginTop:40}}>{item.add2}</Text>

       </ImageBackground>

     )}



  </TouchableOpacity>



 );
}

_keyExtractor=(item, index)=>item.key;

  render() {
    return(
          <SafeAreaProvider>
            <View style={{flex:1,backgroundColor:'white'}}>

            <View style={{flexDirection:'row',width:'90%',marginLeft:'5%',marginTop:29,alignItems:'center',justifyContent:'space-between'}}>

               <View style={{flexDirection:'row',width:'83%',backgroundColor:'#8E8E931F',borderRadius:10,alignItems:'center',height:36}}>

                  <Image style={{height:15,width:15,resizeMode:'contain',marginLeft:9}}
                   source={require('./search.png')} />

                   <TextInput
                     style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#23222280',width:'84%',height:36,paddingBottom:8,marginLeft:2}}
                     placeholder="Search"
                     placeholderTextColor="#23222280"

                     maxLength={100}
                     onChangeText={(text) => this.setState({search: text})}
                     value={this.state.search}
                     />


                    <TouchableOpacity style={{marginLeft:-2}}>
                    <Image style={{height:17,width:17,resizeMode:'contain'}}
                     source={require('./cross.png')} />
                    </TouchableOpacity>

            </View>

            <Button
              style={{fontSize: 17, color: '#161718',fontFamily:'Exo2-Regular'}}
              containerStyle={{paddingBottom:2}}>
              Cancel
            </Button>

           </View>

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

export default LibraryScreen;
