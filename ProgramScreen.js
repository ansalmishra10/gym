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

class ProgramScreen extends React.Component {
  constructor(props) {
    super(props)
     this.state={

       FlatListItems: [],
       loading:'',

  
}
  }

    showLoading() {
    this.setState({loading: true})
   }

    hideLoading() {
    this.setState({loading: false})
   }

   navigate2=(title, all_package)=> {
   GLOBAL.maintitle = title
   GLOBAL.packageall = all_package
   this.props.navigation.navigate('LibraryScreen')

   }


  renderItem=({item}) => {
return(
<>

    <View>

         <View style={{flexDirection:'row',width:'90%',marginTop:12,marginLeft:'5%',alignItems:'center',justifyContent:'space-between'}}>

            <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718'}}>{item.title}</Text>

            <Button
              style={{fontSize: 12, color: '#161718',fontFamily:'Exo2-Medium'}}
              onPress={()=>this.navigate2(item.title, item.all_package)}>
              View All
            </Button>

            </View>


    

    
            <View style={{marginLeft:10,marginTop:5}}>
             <FlatList
              data={item.all_package}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={this._keyExtractor2}
              renderItem={this.renderItem2}
              />
             </View> 
   </View>
</>

 )
}

_keyExtractor=(item, index)=>item.key;

navigate=(no_of_week, id)=> {
  GLOBAL.weeks = no_of_week
  GLOBAL.package_id = id
  this.props.navigation.navigate('WeekScreen')

}


renderItem2=({item}) => {
return(
 
<> 
{ item.payment_status== 'Free' && (
<TouchableOpacity
onPress={()=>this.navigate(item.no_of_week,item.id)}>
 <ImageBackground source={{uri:item.image}}
  style={{width:220,height:120}}
  imageStyle={{ borderRadius: 10 }}>

  <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

  <Button
    style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
    containerStyle={{width:76,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
    {item.package_type}
  </Button>
  
 

  </View>

  <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>{item.package_name}</Text>
 </ImageBackground>

</TouchableOpacity>

)}

{ item.payment_status== 'Paid' && (
<TouchableOpacity
 onPress={()=>this.props.navigation.navigate('PremiumScreen')}>
 <ImageBackground source={{uri:item.image}}
  style={{width:220,height:120}}>

  <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

  <Button
    style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
    containerStyle={{width:76,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
    {item.package_type}
  </Button>
  
  
  <Image source={require('./memlock.png')}
   style={{width:16,height:20,resizeMode:'contain'}}/>

   

  </View>

  <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>{item.package_name}</Text>
 </ImageBackground>

</TouchableOpacity>

)}
 </>

)
}
componentDidMount() {
    
    this.showLoading()
       fetch('http://pumpfit.in/admin/webservices/getpackage', {
         method: 'POST',
        headers: {
            'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: GLOBAL.user_id
        }),
    }).then((response) => response.json())
        .then((responseJson) => {

                // alert(JSON.stringify(responseJson))
              this.hideLoading()
            if (responseJson.status == true) {
                this.setState({FlatListItems: responseJson.workout })
                
            }
            else{
                alert('Invalid Credentials!')
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

  _keyExtractor2=(item, index)=>item.key;

// renderItem3=({item}) => {
// return(

// <TouchableOpacity>
//  <ImageBackground source={item.add3}
//   style={{width:220,height:120}}>

//   <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

//   <Button
//     style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
//     containerStyle={{width:75,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
//     {item.add}
//   </Button>

//   <Image source={ item.add4}
//    style={{width:16,height:20}}/>
//   </View>

//   <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>No Equipment Home Beginner</Text>
//  </ImageBackground>

// </TouchableOpacity>


// )
// }

// _keyExtractor3=(item, index)=>item.key;

// renderItem4=({item}) => {
// return(

// <TouchableOpacity>
//  <ImageBackground source={item.add3}
//   style={{width:220,height:120}}>

//   <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

//   <Button
//     style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
//     containerStyle={{width:75,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
//     {item.add}
//   </Button>

//   <Image source={ item.add4}
//    style={{width:16,height:20}}/>
//   </View>

//   <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>No Equipment Home Beginner</Text>
//  </ImageBackground>

// </TouchableOpacity>


// )
// }

// _keyExtractor4=(item, index)=>item.key;

  render() {
    return(
         <SafeAreaProvider>
          <Header navigation={this.props.navigation}
          showHeaderImage={false}
          headerColor ={'#161718'}
          backImagePath={require('./arrowlogo2.png')}
          headerName={'Workout'}
          headerTextStyle={{fontFamily:'Gilroy-Bold', color:'white',marginLeft:10}} />


           <View style={{flex:1,backgroundColor:'white'}}>

            
            <View>
            <FlatList
             data={this.state.FlatListItems}
             horizontal={false}
             showsHorizontalScrollIndicator={false}
             keyExtractor={this._keyExtractor}
             renderItem={this.renderItem}
             />
             </View>


             

                <TouchableOpacity style={{marginTop:10,marginLeft:'5%',borderRadius:12}}
                onPress={()=>this.props.navigation.navigate('MainScreen')}>
                <ImageBackground source={require('./thmb4.png')}
                 style={{height:147,width:355,justifyContent:'center',borderRadius:12}}>
                 <Text style={{fontSize:24,fontFamily:'Exo2-Medium',color:'white',alignSelf:'center'}}>Exercises Library</Text>

                </ImageBackground>
                </TouchableOpacity>



           </View>
         </SafeAreaProvider>
    );
  }
}

export default ProgramScreen;