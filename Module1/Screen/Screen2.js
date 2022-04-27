import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/AntDesign';

// import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
const {height, width} = Dimensions.get('window');

const Screen2 = () => {
  return (
    <View style={{backgroundColor: 'rgb(91,33,155)',}}>
      <View style={styles.Maincontainer}>
        <View style={{height: height * 0.06}}></View>
        <View style={styles.Vie1}>
          <Text style={styles.txt1}>←</Text>
          <View style={{width: width / 1.75, alignSelf: 'center'}}>
            <Text style={styles.txt}>Register</Text>
          </View>
        </View>
        <View style={styles.img}>
          <Image
            source={require('../Assests/Image/l1.png')}
            style={styles.img}></Image>
        </View>
        <View style={{height: height * 0.04}}></View>
        <View
          style={{
            width: width / 1.2,
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
         <View>
         <Ionicons name="infocirlceo" size={20} color="white" />
         </View>
          <View>
            <Text style={styles.txt2}>
          
              Please enter your information as it is shown on
          </Text>
          </View>
        </View>
        <View style={{width: width / 1.45, alignSelf: 'center'}}>
          <Text style={styles.txt2}> your identity documents.</Text>
        </View>
        <View style={{height: height * 0.04}}></View>
        <View style={styles.vie2}>
          <View style={styles.vie4}>
            <View style={styles.vie3}>
              <TextInput
                placeholder="Mr."
                placeholderTextColor={'white'}
                style={styles.txt3}></TextInput>
            </View>
            <View style={styles.vie5}>
              <TextInput
                placeholder="Ms."
                placeholderTextColor={'black'}
                style={styles.txt3}></TextInput>
            </View>
          </View>
        </View>
        <View style={{height: height * 0.02}}></View>
        <View style={styles.vie6}>
          <View style={styles.vie7}>
            <Text style={styles.txt5}>First Name</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
            <TextInput
                placeholder="Umair"
                placeholderTextColor={'white'}
                style={styles.txt9}></TextInput>
            </View>
              <View >
              <Avatar.Icon
                size={25}
                icon="check"
                color="white"
                backgroundColor="rgb(120,183,55)"
              />
              </View>
            </View>
          </View>
        </View>
        <View style={{height: height * 0.02}}></View>
        <View style={styles.vie6}>
          <View style={styles.vie7}>
            <Text style={styles.txt5}>Last Name</Text>

            <TextInput
              placeholder=""
              placeholderTextColor={'white'}
              style={styles.txt5}></TextInput>
          </View>
        </View>
        <View style={{height: height * 0.02}}></View>
        <View style={styles.vie6}>
          <View style={styles.vie7}>
            <Text style={styles.txt5}>Enter last 4 digits of SNN</Text>

            <TextInput
              placeholder=""
              placeholderTextColor={'white'}
              style={styles.txt5}></TextInput>
          </View>
        </View>
        <View style={{height: height * 0.02}}></View>
        <View style={styles.vie8}>
          <Text style={styles.txt7}>Date of birth</Text>
        </View>
        <View style={styles.vie6}>
         
            <View style={{flexDirection: 'row'}}>
              <View style={styles.vie9}>
              <TextInput
              placeholder="DD"
              placeholderTextColor={'grey'}
              maxLength={2}
              style={styles.txt8}></TextInput>

              </View>
              <View style={styles.vie9}>
              <TextInput
              placeholder="MM"
              placeholderTextColor={'grey'}
              maxLength={2}
              style={styles.txt8}></TextInput>
              </View>
              <View style={styles.vie9}>
              <TextInput
              placeholder="YYYY"
              placeholderTextColor={'grey'}
              maxLength={4}
              style={styles.txt8}></TextInput>
              </View>
            
          </View>
        </View>
        <View style={{height: height * 0.07}}></View>
        <View style={styles.vie11}>
     <TouchableOpacity>
     <View style={styles.vie11}>
            <Text style={styles.txt6}>Continue</Text>

            
          </View>
     </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  Maincontainer: {
    height: height * 1,
    backgroundColor: 'rgb(91,33,155)',
    width: width / 1.1,
    alignSelf: 'center',
  },
  Vie1: {
    width: width / 1.1,
    //  backgroundColor:'red',
    height: height * 0.05,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt9: {
    color: 'white',
    fontSize: 18,
   
    width:width/1.5
  },
  txt1: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  img: {
    alignSelf: 'center',
    height: height * 0.078,
    width: width / 1.2,
  },
  txt2: {
    color: 'white',
  },
  vie2: {
    backgroundColor: 'white',
    height: height * 0.07,
    width: width / 1.2,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',

    justifyContent: 'space-between',
  },
  vie3: {
    backgroundColor: 'rgb(91,33,155)',
    height: height * 0.06,
    width: width * 0.35,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  vie5: {
    backgroundColor: 'white',
    height: height * 0.06,
    width: width * 0.35,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  vie4: {
    // backgroundColor:'red',
    height: height * 0.07,
    width: width / 1.25,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  txt3: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  txt4: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  vie6: {
    backgroundColor: 'rgb(91,33,155)',
    height: height * 0.07,
    width: width / 1.2,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',

    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 2,
  },
  vie7: {
    backgroundColor: 'rgb(91,33,155)',
    height: height * 0.06,
    width: width / 1.35,

    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txt5: {
    color: 'grey',
    
  },
  vie8: {
    // backgroundColor:'red',
    height: height * 0.04,
    width: width / 1.2,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  txt7: {
    color: 'white',
    fontSize: 20,

  },
  vie9: {
    // backgroundColor:'red',
    height: height * 0.065,
    width: width * 0.274,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  txt8: {
    color: 'white',
    textAlign:'center',
    fontSize:19
  },
  vie11:{
    backgroundColor: 'white',
    height: height * 0.071,
    width: width / 1.2,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',

    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  txt6:{
      fontSize:23,
      textAlign:'center',
      color:'rgb(91,33,155)',
      fontWeight:'bold'
  }
});
