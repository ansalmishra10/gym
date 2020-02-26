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
import Stars from 'react-native-stars';

class PartScreen extends React.Component {
   constructor(props) {
     super(props);

     this.state={
         search:'',
         img1:require('./greylike.png'),

         FlatListItems: [
    {"key": "#1",
     "name": "Get In Shape Fast",
     "text": "Barbell Shoulder Press",
     "image": require('./partsimg.png'),

    },
    {"key": "#2",
     "name": "Get In Shape Fast",
     "text": "Barbell Shoulder Press",
     "image": require('./partsimg2.png'),
    },
    {"key": "#3",
     "name": "Get In Shape Fast",
     "text": "Barbell Shoulder Press",
     "image": require('./partsimg.png'),
    },
    {"key": "#4",
     "name": "Get In Shape Fast",
     "text": "Barbell Shoulder Press",
     "image": require('./partsimg2.png'),
    },



 ],
     }
   }


   onChange=()=> {
      this.setState({ img1: require('./redheart.png')})
   }

   renderItem =({item})=> {
     return (



        <View style={{flexDirection:'row',marginTop:20}}>
          <ImageBackground style={{height:60,width:90,resizeMode:'contain'}}
           source={item.image}>

           <TouchableOpacity style={{marginLeft:70,marginTop:5}}
            onPress={()=>this.onChange()}>
           <Image source={this.state.img1}
            style={{height:13,width:14,resizeMode:'contain'}} />
           </TouchableOpacity>

           </ImageBackground>


          <View style={{flexDirection:'column'}}>
           <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718',marginLeft:12}}>{item.name}</Text>

           <View style={{flexDirection:'row',marginTop:6,marginLeft:13}}>

            <Text style={{fontSize:12,fontFamily:'Exo2-Regular',color:'#00000066'}}>{item.text}</Text>

            <Text style={{fontSize:12,fontFamily:'Exo2-Regular',color:'#00000066',marginLeft:42}}>Level</Text>

            <View style={{justifyContent:'center',width:'22%'}}>
            <Stars
              default={2}
              count={5}
              starSize={8}
              spacing={2}
              fullStar={require('./blackcircle.png')}
              emptyStar={require('./greycircle.png')}
               />
            </View>

           </View>



          </View>


        </View>

     )
   }



   _keyExtractor=(item, index)=>item.key;





   render() {
    return(
       <SafeAreaProvider>
         <View style={{flex:1}}>


           <View style={{flexDirection:'row',width:'90%',marginLeft:'5%',marginTop:15,alignItems:'center',justifyContent:'space-between'}}>

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
                  style={{fontSize: 17, color: '#161718',fontFamily:'Exo2-Regular'}}>
                  Cancel
                </Button>

           </View>

              <View style={{height:'auto',width:'90%',alignSelf:'center'}}>
                 <FlatList style= {{ height:'auto', flexGrow:0,borderTopColor:'#c0c0c0',width:'100%'}}
                 data={this.state.FlatListItems}
                 numColumns={1}
                 keyExtractor={this._keyExtractor}
                 renderItem={this.renderItem}
                 />
              </View>







         </View>
       </SafeAreaProvider>
    );
  }
}

export default PartScreen;
