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

class Favourite extends React.Component {
   constructor(props) {
     super(props);

     this.state={
         search:'',
         img1:require('./greylike.png'),

         FlatListItems: [



 ],
     }
   }

   componentDidMount(){


alert(GLOBAL.user_id)
     fetch('http://pumpfit.in/admin/webservices/category_feb', {
       method: 'POST',
      headers: {
          'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user_id:GLOBAL.user_id


      }),
  }).then((response) => response.json())
      .then((responseJson) => {

     alert(JSON.stringify(responseJson))

          if (responseJson.status == true) {
               this.setState({FlatListItems: responseJson.category })


          }
          else{
             this.setState({FlatListItems: [] })
          }
      })
      .catch((error) => {
          console.error(error);
      });
   }



like = (type,id) =>{
  alert(id)

  fetch('http://139.59.76.223/gym/webservices/exerciseLike', {
    method: 'POST',
   headers: {
       'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
       'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     category_id: id,
     user_id:GLOBAL.user_id,
     like:type



   }),
}).then((response) => response.json())
   .then((responseJson) => {

alert(JSON.stringify(responseJson))

       if (responseJson.status == true) {



       }
       else{

       }
   })
   .catch((error) => {
       console.error(error);
   });
}

   onChange=(item,index)=> {

alert(GLOBAL.user_id)

       fetch('http://139.59.76.223/gym/webservices/exerciseLike', {
         method: 'POST',
        headers: {
            'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category_id: item.id,
          user_id:GLOBAL.user_id,
          like:0



        }),
     }).then((response) => response.json())
        .then((responseJson) => {

     alert(JSON.stringify(responseJson))

            if (responseJson.status == true) {



            }
            else{

            }
        })
        .catch((error) => {
            console.error(error);
        });





     var array = [...this.state.FlatListItems]; // make a separate copy of the array
       var index = index
       if (index !== -1) {
         array.splice(index, 1);
         this.setState({FlatListItems: array});
       }
     this.setState({ img1: require('./redheart.png')})
   }

   renderItem =({item,index})=> {
     return (



        <TouchableOpacity style={{flexDirection:'row',marginTop:20}}
          onPress={()=> this.props.navigation.navigate('VideoScreen')}>
          <ImageBackground style={{height:90,width:90,resizeMode:'contain'}}
           source={{uri:item.image}}>

           <TouchableOpacity style={{marginLeft:70,marginTop:5}}
            onPress={()=>this.onChange(item,index)}>
            {item.like == 0 && (
              <Image source={this.state.img1}
               style={{height:13,width:14,resizeMode:'contain'}} />
            )}


           </TouchableOpacity>


           <TouchableOpacity style={{marginLeft:70,marginTop:5}}
            onPress={()=>this.onChange(item,index)}>
            {item.like == 1 && (
              <Image source={require('./redheart.png')}
               style={{height:13,width:14,resizeMode:'contain'}} />
            )}


           </TouchableOpacity>
           </ImageBackground>


          <View style={{flexDirection:'column'}}>
           <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718',marginLeft:12}}>{item.title}</Text>

           <View style={{flexDirection:'row',marginTop:6,marginLeft:13,justifyContent:'space-between',width:'70%'}}>

            <Text style={{fontSize:12,fontFamily:'Exo2-Regular',color:'#00000066'}}>{item.body_parts}</Text>
<View style = {{flexDirection:'row',marginRight:20}}>
            <Text style={{fontSize:12,fontFamily:'Exo2-Regular',color:'#00000066',marginLeft:42}}>Level</Text>

            <View style = {{marginTop:4}}>
            <Stars
              default={item.lavel}
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


        </TouchableOpacity>

     )
   }



   _keyExtractor=(item, index)=>item.key;





   render() {
    return(
      <SafeAreaProvider>
      <Header navigation={this.props.navigation}
          showHeaderImage={false}
          headerColor ={'#161718'}
          backImagePath={require('./arrowlogo2.png')}
          headerName={'Favourites'}
          headerTextStyle={{fontFamily:'Gilroy-Bold', color:'white',marginLeft:10}} />
                     

         <View style = {{flex:1,backgroundColor:'white'}} >




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

export default Favourite;
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor :'white',

    },
    containers: {

        backgroundColor :'white'
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
