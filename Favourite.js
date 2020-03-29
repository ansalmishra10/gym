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
var arrayholder = [];
import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';
import Stars from 'react-native-stars';

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




          if (responseJson.status == true) {
               this.setState({FlatListItems: responseJson.category })

arrayholder = responseJson.category
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



       if (responseJson.status == true) {



       }
       else{

       }
   })
   .catch((error) => {
       console.error(error);
   });
}
naviga = (video,image,description,body_parts,you_need,item) => {





GLOBAL.video = video
GLOBAL.image = image
GLOBAL.description = description
GLOBAL.parts = body_parts
GLOBAL.needs = you_need
this.props.navigation.navigate('VideoScreen')

}
   onChange=(item,index)=> {



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



       <View>
       

               <TouchableOpacity style={{flexDirection:'row',marginTop:20}}
                 onPress={()=> this.naviga(item.video,item.image,item.description,item.body_parts,item.you_need,item)}>




                 <View style = {{backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
                 <ImageBackground style={{height:60,width:80}}
                  source={{uri:item.image}}
                  imageStyle={{borderRadius:8}}>

                  <View style = {{position:'absolute',top:2,right:6}}>
                             <TouchableOpacity style={{marginLeft:70,marginTop:5}}
                              onPress={()=>this.onChange(item,index)}>
                              {item.like == 0 && (
                                <Image source={this.state.img1}
                                 style={{height:13,width:14,resizeMode:'contain'}} />
                              )}


                             </TouchableOpacity>


                             <TouchableOpacity style={{marginLeft:70,marginTop:0}}
                              onPress={()=>this.onChange(item,index)}>
                              {item.like == 1 && (
                                <Image source={require('./redheart.png')}
                                 style={{height:13,width:14,resizeMode:'contain'}} />
                              )}


                             </TouchableOpacity>
                             </View>
                  
                  </ImageBackground>
                  <View style={{flexDirection:'column',width:'98%'}}>
                   <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718',marginLeft:12}}>{item.title}</Text>

                   <View style={{flexDirection:'row',marginTop:6,marginLeft:13,justifyContent:'space-between',width:'60%'}}>

                    <Text style={{fontSize:12,fontFamily:'Exo2-Regular',color:'#00000066'}}>{item.body_parts}</Text>
                    <View style = {{flexDirection:'row',width:'40%',alignItems:'center'}}>
                    <Text style={{fontSize:12,fontFamily:'Exo2-Regular',color:'#00000066'}}>Level</Text>

                    <View style={{margin:5}}>
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


       </View>





               </TouchableOpacity>
               </View>


     )
   }

   SearchFilterFunction(text){
        const newData = arrayholder.filter(function(item){
            const mergetwo= item.title
            const itemData = mergetwo.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })


        this.setState({
            FlatListItems: newData,
            search: text


        })

    }
   _keyExtractor=(item, index)=>item.key;





   render() {
    return(
      <SafeAreaProvider>
                     <StatusBar backgroundColor="black" barStyle="light-content" />

                     <View style = {{height:70,backgroundColor:'black',flexDirection:'row',width:'100%',alignItems:'center'}}>
                        <View>
                        <TouchableOpacity onPress= {()=>this.props.navigation.goBack()}>
                            <Image
                                source={require('./arrowlogo2.png')}
                                style={{width: 18, height: 20,marginLeft:20,resizeMode:'contain'}}


                            />
                        </TouchableOpacity>
                        </View>


                        <Text style = {{color:'white',fontFamily:'Exo2-Bold',fontSize: 20,marginLeft:20}}>
                             Favourite
                        </Text>


                        

                    </View>

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
                         onChangeText={(text) => this.SearchFilterFunction(text)}
                         value={this.state.search}
                         />


                        <TouchableOpacity   onPress={()=>this.setState({search:''})}style={{marginLeft:-2}}>
                        <Image style={{height:17,width:17,resizeMode:'contain'}}
                         source={require('./cross.png')} />
                        </TouchableOpacity>

                </View>

                <Button
                 onPress={()=>this.setState({search:''})}
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