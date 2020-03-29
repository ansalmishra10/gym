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

class Meal extends React.Component {
  constructor(props) {
    super(props);

     this.state={
       FlatListItems: [],
}
  }



  transfer=(add)=> {

    //  GLOBAL.week = add
      this.props.navigation.navigate('MealDetail',{name:add})
   }



componentDidMount(){
  this._unsubscribe = this.props.navigation.addListener('focus', () => {
    fetch('http://pumpfit.in/admin/webservices/get_meal_category', {
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
              this.setState({FlatListItems: responseJson.meal_category })



         }
         else{
            this.setState({FlatListItems: [] })
         }
     })
     .catch((error) => {
         console.error(error);
     });
      });
}


  renderItem=({item,index}) => {
//alert(index);




return(

<View>

   <TouchableOpacity
    onPress={()=>this.transfer(item.title)}>

     <View style={{width:'100%'}}>


        <Image style={{width:'90%',height:200,resizeMode:'cover',borderRadius:10,margin:'5%'}}
         source={{uri:item.image}}/>


<View style = {{position:'absolute', top :40,right:30,height:30,width:100,backgroundColor:'black',borderRadius:4}}>
        <Text style={{textAlign:'center',fontSize: 12, color: '#161718',fontFamily:'Exo2-Medium',color:'white',marginTop:6}}>{item.title}</Text>
</View>



     </View>




  </TouchableOpacity>


  </View>



 );
}




  _keyExtractor=(item, index)=>item.key;

  render() {
  return(
    <SafeAreaProvider>
                    <StatusBar backgroundColor="black" barStyle="light-content" />

                    <View style = {{height:65,backgroundColor:'black',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                        <TouchableOpacity onPress= {()=>this.props.navigation.goBack()}>
                            <Image
                                source={require('./arrowlogo2.png')}
                                style={{width: 18, height: 20,marginLeft:20,resizeMode:'contain'}}


                            />
                        </TouchableOpacity>
                        </View>


                        <Text style = {{alignSelf:'center',textAlign:'center',color:'white',fontFamily:'Exo2-Bold',fontSize: 20,paddingRight:30}}>
                             Daily Meal
                        </Text>


                        <Text style = {{alignSelf:'center',textAlign:'center',color:'white',fontFamily:GLOBAL.heavy,fontSize: 20,paddingRight: 10}}>

                        </Text>

                    </View>


       <View style = {{backgroundColor:'white'}} >


            <FlatList style = {{height:'90%'}}
             data={this.state.FlatListItems}

             keyExtractor={this._keyExtractor}
             renderItem={this.renderItem}
      />



            </View>
          </SafeAreaProvider>
      );
    }
  }

  export default Meal;
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