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
  import Loader from './Loader.js';
import RazorpayCheckout from 'react-native-razorpay';
  import HTML from 'react-native-render-html';
import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';
import { WebView } from 'react-native-webview';
import Header from 'react-native-custom-headers';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class NewSubscription extends React.Component {
  constructor(props) {
    super(props)
     this.state={

       FlatListItems: [],
       loading:'',
       image:[],
       mystaus:false,


}
  }

    showLoading() {
    this.setState({loading: true})
   }

    hideLoading() {
    this.setState({loading: false})
   }


  




access = (item) =>{
 
 // alert(JSON.stringify(item.amount))

var amount = parseFloat(item.amount) * 100 

var d = `Order_Package_${GLOBAL.user_id}_${item.id}`

  alert(JSON.stringify(amount))

  var options = {
      description: d,
      image: item.image,
      currency: 'INR',
      key: 'rzp_live_zGbIwQTInJYcww',
      amount: amount,


      name: GLOBAL.username,
      prefill: {
          email: GLOBAL.email,
          contact: GLOBAL.mobile,
          name: GLOBAL.username 
      },
      theme: {color: 'black'}
  }



  RazorpayCheckout.open(options).then((data) => {
          // alert(JSON.stringify(data.razorpay_payment_id))
      var a = data.razorpay_payment_id
      this.props.navigation.navigate('Thankyou')
    //  this.capture(a,b,id);



  }).catch((error) => {
      // handle failure
     // this.myPayments(s,error.description,'')

  });
  RazorpayCheckout.onExternalWalletSelection(data => {



  });


}

componentDidMount() {

      // <VideoPlayer
      //         source={{ uri:this.state.image.video }}
      //         navigator={ this.props.navigator }
      //         repeat = {true}
      //         onBack={()=>this.props.navigation.goBack()}
      //     />
      // alert(JSON.stringify(GLOBAL.mobile))


     this._unsubscribe = this.props.navigation.addListener('focus', () => {
    this.showLoading()
       fetch('http://pumpfit.in/admin/webservices/get_package_intro', {
         method: 'POST',
        headers: {
            'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: GLOBAL.user_id,
            package_id:  GLOBAL.package_id
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)

                 // alert(JSON.stringify(responseJson))
              this.hideLoading()
            if (responseJson.status == true) {
              if (responseJson.package_intro.length == 0){
                  this.setState({mystaus:false})
              }else{
                this.setState({FlatListItems: responseJson.package_intro })
                this.setState({image:responseJson.package_intro[0]})
                this.setState({mystaus:true})
              }

            }
            else{
              //  alert('Invalid Credentials!')
            }
        })
        .catch((error) => {
            console.error(error);
        });
      }
    )
}

  



  render() {
    if(this.state.loading){
            return(
                <Loader>

                </Loader>

            )
        }


        

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
                           {GLOBAL.getPack.package_name}
                        </Text>


                        

                    </View>



{this.state.mystaus == true && (



           <KeyboardAwareScrollView style={{backgroundColor:'white'}}>

           <View style={{width:'100%',height:300}}>

  

          <WebView source={{ uri: this.state.image.video }} />

             




           </View>
            <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718',margin:10}}>Amount : Rs {GLOBAL.getPack.amount}</Text>
           <View style = {{margin:5}}>


           <HTML style = {{margin:10}} html={this.state.image.title} imagesMaxWidth={Dimensions.get('window').width} />
 

{this.state.image.payment_status == "Paid" && (
  <Button onPress={()=> this.access(GLOBAL.getPack)}
   style={{fontSize:17,paddingTop:10,marginTop:10,backgroundColor:'black',fontFamily:'Exo2-Medium',color:'white',width:'90%',alignSelf:'center',height:40}}>
   PAY
  </Button>
)}
{this.state.image.payment_status != "Paid" && (
  <Button onPress={()=> this.props.navigation.navigate('WeekScreen')}
   style={{fontSize:17,marginTop:10,paddingTop:10,backgroundColor:'black',fontFamily:'Exo2-Medium',color:'white',width:'90%',alignSelf:'center',height:40}}>
   PROCEED
  </Button>
)}

           </View>






<View style = {{height:10}}>
</View>

           </KeyboardAwareScrollView>
)}
           {this.state.mystaus == false && (
             <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}> 
           <Image style={{height:100,width:100,resizeMode:'contain',borderRadius:8,alignSelf:'center'}}
             source={require('./nodata.png')} />

           <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'black',marginTop:10}}>No Data Found</Text>  

         </View>
           )}
         </SafeAreaProvider>
    );
  }
}

export default NewSubscription;
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