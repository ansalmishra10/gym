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
import Header from 'react-native-custom-headers';

class Allexercises extends React.Component {
  constructor(props) {
     super(props); 
      this.state = {
        search:'',
        listvis:0,
        workoutlist:[]
      }
   }

  SearchFilterFunction(text){
       this.setState({listvis: 1})
       this.setState({search: text})
       this.setState({text:text})

          const url = 'http://pumpfit.in/admin/webservices/get_library'

           fetch(url, {
       method: 'POST',
       headers: {
         'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         user_id: GLOBAL.user_id,
         library_type: GLOBAL.libcat


       }),
      }).then((response) => response.json())
         .then((responseJson) => {



             if (responseJson.status == 'true'){
               alert(JSON.stringify(responseJson))
               this.setState({ workoutlist: responseJson.library})
           
             }else{
              alert('No user found')
           
           }
      

         })
         .catch((error) => {
           console.error(error);

         });



        

     }


     _renderItems = ({item,index}) => {

           return (


               <TouchableOpacity>
                       <View style={{height:80,justifyContent:'center',width:'100%',alignSelf:'center'}}>

                       <View style={{flexDirection:'row',alignItems:'center',height:'auto',marginLeft:'5%',width:'90%'}}>

                             <Image source={{ uri: item.image}}
                              style={{height:58,width:58,borderRadius:29,resizeMode:'cover'}}/>
                           
                           <Text style={{color:'#000000',fontSize:18,fontFamily:'Gilroy-Bold',marginLeft:12}}>
                               {item.package_name}
                           </Text>
                           
                           

                        </View>
                       </View>
               </TouchableOpacity>
           )
       }


     openState=()=>{
      this.setState({listvis: !this.state.listvis})
    }


    render() {
    return(
          
          <SafeAreaProvider>
           <View style={{flex:1,backgroundColor:'white'}}>
               
               <View style={{flexDirection:'row',width:'90%',marginLeft:'5%',marginTop:15,alignItems:'center',justifyContent:'space-between'}}>

                <View style={{flexDirection:'row',width:'83%',backgroundColor:'#8E8E931F',borderRadius:10,alignItems:'center',height:36}}>

                      <Image style={{height:15,width:15,resizeMode:'contain',marginLeft:9}}
                       source={require('./search.png')} />

                       <TextInput
                         style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#23222280',width:'84%',height:36,paddingBottom:8,marginLeft:2}}
                         placeholder="Search"
                         placeholderTextColor="#23222280"

                         maxLength={100}
                         onChangeText={(text) => this.SearchFilterFunction(text)}
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

           {this.state.workoutlist.length == 0 && (
             <View style={{width:'94%',height:1}}/>

            )}
            {this.state.workoutlist.length !=0 && (
             <FlatList style= {{ height:'auto', flexGrow:0,marginTop:15, borderTopColor:'#c0c0c0',width:'100%'}}
                                data={this.state.workoutlist}
                                numColumns={1}
                                nestedScrollEnabled={true}
                                horizontal={false}
                                keyExtractor = { (item, index) => index.toString() }
                                renderItem={this._renderItems}
                      />


            )}

           </View>
          </SafeAreaProvider>
      );
  }
}

export default Allexercises;