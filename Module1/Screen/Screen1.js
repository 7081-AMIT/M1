import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/AntDesign';

// import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
const {width, height} = Dimensions.get('window');

const Screen1 = () => {
  return (
    <View>
      <View style={styles.maincontainer}>
        <View style={{height: height * 0.09}}></View>
        <Image
          source={require('../Assests/Image/Img1.png')}
          style={styles.img}
        />
        <View style={styles.Vie1}>
          <View style={{height: height * 0.055}}></View>
          <View style={styles.vie2}>
            <View style={{width: width / 1.4, alignSelf: 'center'}}>
              <View style={{height: height * 0.007}}></View>
              <Text style={{justifyContent: 'center'}}>Email</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: width / 1.2,
                // backgroundColor: 'black',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  // backgroundColor: 'white',
                  height: height * 0.05,
                  width: width * 0.06,
                  justifyContent: 'center',
                }}>
                <Ionicons name="man" size={20} color="green" />
              </View>
              <View
                style={{
                  //backgroundColor: 'green',
                  height: height * 0.05,
                  justifyContent: 'center',
                  width: width * 0.7,
                }}>
                <TextInput
                  placeholder="de-umair@mobiloitte.com"
                  placeholderTextColor={'white'}
                  style={{color: 'white'}}></TextInput>
              </View>
              <View
                style={{
                  // backgroundColor: 'green',
                  height: height * 0.05,
                  justifyContent: 'center',
                }}>
                <Avatar.Icon
                  size={30}
                  icon="check"
                  color="white"
                  backgroundColor='rgb(120,183,55)'
                />
              </View>
            </View>
            {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <Ionicons name="man" size={20} color="green" />
              <TextInput
                placeholder="de-umair@mobiloitte.com"
                placeholderTextColor={'white'}></TextInput>
                  <Avatar.Icon size={30} icon="check" color='white'  backgroundColor='lightgreen'/>
            </View> */}
          </View>
          {/* SecondContainer */}

          <View style={{height: height * 0.045}}></View>
          <View style={styles.vie2}>
            <View style={{width: width / 1.4, alignSelf: 'center'}}>
              <View style={{height: height * 0.007}}></View>
              <Text style={{justifyContent: 'center', color: 'grey'}}>
                Password
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: width / 1.2,
                //backgroundColor: 'black',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  // backgroundColor: 'white',
                  height: height * 0.05,
                  width: width * 0.08,
                  justifyContent: 'center',
                }}>
                <Avatar.Icon
                  size={30}
                  icon="lock"
                  color="grey"
                  backgroundColor="rgb(91,34,154)"
                />
              </View>
              <View
                style={{
                  //backgroundColor: 'green',
                  height: height * 0.05,
                  justifyContent: 'center',
                  width: width * 0.65,
                }}>
                <TextInput
                  placeholder=" ***********"
                  placeholderTextColor={'white'}
                  style={{fontSize: 30}}></TextInput>
              </View>
              <View
                style={{
                  // backgroundColor: 'green',
                  height: height * 0.05,
                  justifyContent: 'center',
                }}>
                <Avatar.Icon
                  size={30}
                  icon="eye-off"
                  color="grey"
                  backgroundColor="rgb(91,34,154)"
                />
              </View>
            </View>
            {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <Ionicons name="man" size={20} color="green" />
              <TextInput
                placeholder="de-umair@mobiloitte.com"
                placeholderTextColor={'white'}></TextInput>
                  <Avatar.Icon size={30} icon="check" color='white'  backgroundColor='lightgreen'/>
            </View> */}
          </View>

          {/* ThirdContainer */}
          <View style={{height: height * 0.025}}></View>
          <View style={styles.vie3}>
            <Text style={styles.txt}>
              Ensure you don't reuse passwords from other
            </Text>
            <Text style={styles.txt}>site. You password must:</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  // backgroundColor: 'white',
                  //height: height * 0.05,
                  width: width * 0.07,
                  justifyContent: 'center',
                }}>
                <Avatar.Icon
                  size={30}
                  icon="check"
                  color="white"
                  backgroundColor="rgb(91,34,154)"
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'white',
                  // height: height * 0.05,
                  width: width * 0.8,
                  justifyContent: 'center',
                }}>
                <Text style={styles.txt}>Containe a number</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  // backgroundColor: 'white',
                  //height: height * 0.05,
                  width: width * 0.07,
                  justifyContent: 'center',
                }}>
                <Avatar.Icon
                  size={30}
                  icon="check"
                  color="lightgreen"
                  backgroundColor="rgb(91,34,154)"
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'white',
                  // height: height * 0.05,
                  width: width * 0.8,
                  justifyContent: 'center',
                }}>
                <Text style={styles.txt}>
                  Containe aboth uppercase and lowercase letters
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  // backgroundColor: 'white',
                  //height: height * 0.05,
                  width: width * 0.07,
                  justifyContent: 'center',
                }}>
                <Avatar.Icon
                  size={30}
                  icon="check"
                  color="white"
                  backgroundColor="rgb(91,34,154)"
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'white',
                  // height: height * 0.05,
                  width: width * 0.8,
                  justifyContent: 'center',
                }}>
                <Text style={styles.txt}>Be between 8-20 characters</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  // backgroundColor: 'white',
                  //height: height * 0.05,
                  width: width * 0.07,
                  justifyContent: 'center',
                }}>
                <Avatar.Icon
                  size={30}
                  icon="check"
                  color="white"
                  backgroundColor="rgb(91,34,154)"
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'white',
                  // height: height * 0.05,
                  width: width * 1,
                  justifyContent: 'center',
                }}>
                <Text style={styles.txt}>
                  Not contain any of these special character ('" % &)
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  // backgroundColor: 'white',
                  //height: height * 0.05,
                  width: width * 0.07,
                  justifyContent: 'center',
                }}>
                <Avatar.Icon
                  size={30}
                  icon="check"
                  color="white"
                  backgroundColor="rgb(91,34,154)"
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'white',
                  // height: height * 0.05,
                  width: width * 0.8,
                  justifyContent: 'center',
                }}>
                <Text style={styles.txt}>
                  Not contain your complete email and/or user ID
                </Text>
              </View>
            </View>
            <View style={{height:height*0.04}}></View>
            <TouchableOpacity>
            <View style={styles.Vie4}>
              <Text style={styles.txt1}>Continue</Text>
            </View>
            </TouchableOpacity>
            <View style={{height:height*0.02}}></View>
            <View style={{alignSelf:'center'}}>
                <Text style={styles.txt3}>OR</Text>
              
            </View>
            <View style={{alignSelf:'center'}}>
            <Image source={require('../Assests/Image/logo.png')} style={styles.imgg}/>
            </View>
            <View style={{height:height*0.015}}></View>
            <View  style={{flexDirection:'row',justifyContent:'center'}}>
              <Text style={styles.txt4}>Don't have an account ?</Text>
             <TouchableOpacity>
             <Text style={styles.txt5}> Signup</Text>
             </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'rgb(91,34,154)',
    height: height * 1,
  },
  img: {
    alignSelf: 'center',
  },
  Vie1: {
    width: width / 1.1,
   // backgroundColor: 'black',
    height: height * 0.52,
    alignSelf: 'center',
  },
  vie2: {
    backgroundColor: 'rgb(91,34,154)',
    height: height * 0.085,
    width: width / 1.1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  vie3: {
    //backgroundColor: 'rgb(91,34,154)',
    height: height * 0.3,
    width: width / 1.1,
  },
  txt: {
    color: 'white',
  },
  Vie4: {
    backgroundColor: 'white',
    height: height * 0.07,
    width:width/1.1,
    borderRadius:10,
    justifyContent:'center',
    borderWidth:2,
    borderColor:'white'
  },
  txt1:{
      fontSize:20,
      fontWeight:'bold',
      color:'rgb(91,34,154)',
      textAlign:'center'

  },
  txt3:{
      color:'grey',
      fontSize:18
  },
  txt4:{
      color:'white',
      fontSize:15
  },
  txt5:{
      textDecorationLine:'underline',
      fontSize:18,
      color:'white'

  }
});
