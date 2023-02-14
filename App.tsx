import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
import { SelectList } from 'react-native-dropdown-select-list';
import AsyncStorage from '@react-native-async-storage/async-storage';

function signIn() {

  const  [mobile,setmobile] = useState(null);
  const  [password,setpassword] = useState(null);
  const ui = (
    <SafeAreaView style={styles.signInmain}>
      <Image
        source={{
          uri: 'https://www.edigitalagency.com.au/wp-content/uploads/OnlyFans-logo-symbol-icon-png-blue-background.png',
        }}
        style={styles.signinimage}></Image>

      <View style={styles.signinview1}>
        <Icon style={styles.signinIcon1} name="user"></Icon>
        <TextInput style={styles.signinput11} autoCorrect={false} inputMode={"numeric"} maxLength={10} placeholder="Your Mobile No" onChangeText={setmobile}></TextInput>
      </View>
      <View style={styles.signinview1}>
        <Icon style={styles.signinIcon1} name="lock"></Icon>
        <TextInput
          style={styles.signinput11}
          secureTextEntry={true}  placeholder="Your Password" onChangeText={setpassword}></TextInput>
      </View>

     <Pressable style={styles.signinpbutton}  onPress={signinprocess} >
      <Text style={styles.signinbuttontest} >Sign In </Text>
       </Pressable>
     <Pressable style={styles.signupbutton} > 
     <Text style={styles.signinbuttontest} >Sign Up </Text>
     </Pressable>
    </SafeAreaView>
  );
  return ui;
 function signinprocess(){

    


    var jsRequestObject = {"mobile":mobile,"password":password};
    var jsonreqesttext = JSON.stringify(jsRequestObject);
    var formData = new FormData();
    formData.append("jsonreqesttext",jsonreqesttext);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var response = request.responseText;
        var JS_object = JSON.parse(response);
        if(JS_object.msg=="Error"){

          Alert.alert('Message', "Invalid");

        }else{
     
          //AsyncStorage.setItem("user",JSON.stringify(JS_object.user));
        
var userobj = JS_object.user;
Alert.alert('Message', "Hello " +userobj.name);
        AsyncStorage.setItem("user",JSON.stringify(userobj));

  
      
   

        }
      }
    };

    request.open('POST', 'http://10.0.2.2/react_chat_php/signin.php', true);
    request.send(formData);
  }

  }


function signUp() {
  const ui = (
    <SafeAreaView style={styles.signUpmain}>
      <Image
        source={{
          uri: 'https://www.edigitalagency.com.au/wp-content/uploads/OnlyFans-logo-symbol-icon-png-blue-background.png',
        }}
        style={styles.signUpimage}></Image>

      <View style={styles.signupview1}>
        <Icon style={styles.signupIcon1} name="user"></Icon>
        <TextInput style={styles.signupinput11} autoCorrect={false}  placeholder="Your User Name"></TextInput>
      </View>
      <View style={styles.signinview1}>
        <Icon style={styles.signinIcon1} name="mobile"></Icon>
        <TextInput style={styles.signinput11} autoCorrect={false} inputMode={"numeric"} maxLength={10} placeholder="Your Mobile No"></TextInput>
      </View>
      <View style={styles.signinview1}>
        <Icon style={styles.signinIcon1} name="lock"></Icon>
        <TextInput
          style={styles.signinput11}
          secureTextEntry={true}  placeholder="Your Password"></TextInput>
      </View>
      <View style={styles.signinview1}>
        <Icon style={styles.signinIcon1} name="lock"></Icon>
        <TextInput
          style={styles.signinput11}
          secureTextEntry={true}  placeholder="Re enter Your Password"></TextInput>
      </View>
      <View style={styles.signinview1}>
        <Icon style={styles.signinIcon1} name="map"></Icon>

        <ModalDropdown options={['Srilanka', 'India', 'Australia', 'London', 'Japan'] } defaultValue={"Select Your country"} style={styles.signupselect} 
        
        textStyle={{fontSize:15 } }  
     
        dropdownTextStyle={{fontSize:20}}  
        />
      </View>

     <Pressable style={styles.signuppviewbutton}  >
      <Text style={styles.signinbuttontest} >Sign Up </Text>
       </Pressable>
     <Pressable style={styles.signupviewbutton1} > 
     <Text style={styles.signinbuttontest} >Back to sign In </Text>
     </Pressable>
    </SafeAreaView>
  );
  return ui;
}

const items = [
  {
    pic: 'https://images.genius.com/e482c3132d4b0d375089e6e422e7913d.624x550x1.jpg',
    name: 'Mia Khalifa',
    msg: 'Hi How Are You',
    time: '9:39 PM',
    count: '8',
  },

  {
    pic: 'https://techstory.in/wp-content/uploads/2022/02/lana-rhoades-fb-1.jpg',
    name: 'Lana Rhoades',
    msg: 'Hi How Are You',
    time: '9:39 PM',
    count: '8',
  },

  {
    pic: 'https://i2.wp.com/www.colombotelegraph.com/wp-content/uploads/2019/04/model-Piyumi-Hansamali-1.jpg?fit=960%2C959&ssl=1',
    name: 'Piumi Hansamali',
    msg: 'Hi How Are You',
    time: '9:39 PM',
    count: '8',
  },
];

function home() {
  const ui = (
    <SafeAreaView style={styles.home}>
      <Text style={styles.hometext1}>GB Whatsapp</Text>
      <View style={styles.homeview1}>
        <TextInput style={styles.homeinput1} autoCorrect={false}></TextInput>

        <Icon name="search" size={20} color="black" style={styles.homeimage1} />
      </View>

      <FlatList data={items} renderItem={itemUI} />
    </SafeAreaView>
  );

  return ui;
}

function itemUI({item}) {
  const ui = (
    <View style={styles.item}>
      <Image source={{uri: `${item.pic}`}} style={styles.itemImage}></Image>
      <View style={styles.itemview1}>
        <Text style={styles.itemtext1}>{item.name}</Text>
        <Text style={styles.itemtext2}>{item.msg}</Text>
      </View>
      <View style={styles.itemview2}>
        <Text style={styles.itemtext3}>{item.time}</Text>
        <View style={styles.itemshape1}>
          <Text style={styles.itemtext4}>{item.count}</Text>
        </View>
      </View>
    </View>
  );

  return ui;
}


function chat() {

  const [name,setName ] = useState(null);

 async function naime (){
  var userJsonText = await AsyncStorage.getItem("user");
  var userJsonobj = JSON.parse(userJsonText);
setName(userJsonobj.name);
}
naime();
  const  [chathistory,setChatHistory] = useState([]);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var response = request.responseText;
      var JS_object = JSON.parse(response);
      setChatHistory(JS_object);
    }
  };

  request.open('GET', 'http://10.0.2.2/react_chat_php/load_chat.php', true);
  request.send();





  const ui = (
    <SafeAreaView style={styles.chat}>
      <Text style={styles.hometext1}>Chat</Text>
      <Image
        source={{
          uri: 'https://images.genius.com/e482c3132d4b0d375089e6e422e7913d.624x550x1.jpg',
        }}
        style={styles.itemImage}></Image>
      <Text style={styles.chattext2}>{name}</Text>

      <FlatList
        data={chathistory}
        renderItem={chatitem}
        style={styles.chatlis}
      />
      <View style={styles.chatbarview}>
        <TextInput
          style={styles.chatinput1}
          autoCorrect={false}
          placeholder={'Enter Your Massage'}></TextInput>
        <Icon name="send" size={30} color="blue" style={styles.chatimage1} />
      </View>
    </SafeAreaView>
  );

  return ui;
}

function chatitem({item}) {
  const itemUI = (
    <View
      style={item.side == 'left' ? styles.chatviewLeft : styles.chatviewRight}>
      <Text>{item.msg}</Text>
      <View style={styles.chatview1}>
        <Text style={styles.chattext3}>{item.time}</Text>
        {item.status == 'sent' ? (
          <Icon
            name="check"
            size={10}
            color="black"
            style={styles.chaticonseen}
          />
        ) : (
          <Icon
            name="check"
            size={10}
            color="blue"
            style={styles.chaticonseen}
          />
        )}
      </View>
    </View>
  );
  return itemUI;
}

const styles = StyleSheet.create({
  chatbarview: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  chatinput1: {
    width: '80%',
    height: 40,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,

    fontSize: 15,
    paddingLeft: 40,
  },

  chatimage1: {
    paddingHorizontal: 10,
  },

  chattext3: {
    fontSize: 10,
    color: 'black',
  },

  chatlis: {
    width: 390,
    paddingVertical: 10,
  },

  chaticonseen: {
    paddingLeft: 10,
  },
  chatview1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  chatviewLeft: {
    backgroundColor: '#C1E8FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginLeft: 20,
    marginTop: 5,
  },

  chatviewRight: {
    backgroundColor: '#C1E8FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginRight: 20,
    marginTop: 5,
  },

  chattext2: {
    fontSize: 22,
    paddingVertical: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  chat: {
    flex: 1,
    alignItems: 'center',
  },
  itemshape1: {
    width: 22,
    height: 22,
    borderRadius: 20,
    backgroundColor: '#2675EC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  home: {
    flex: 1,
    alignItems: 'center',
  },

  hometext1: {
    fontSize: 28,
    paddingVertical: 15,
    color: 'black',
    fontFamily: 'dance',
  },

  itemtext1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  itemtext3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },

  itemtext2: {
    fontSize: 16,
  },

  itemtext4: {
    color: 'white',
  },

  homeinput1: {
    height: 40,
    borderStyle: 'solid',
    borderWidth: 2,
    width: '90%',
    borderRadius: 20,
    fontSize: 20,
    paddingLeft: 15,
    borderColor: 'black',
    paddingRight: 50,
  },
  homeview1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  homeimage1: {
    position: 'absolute',
    right: 20,
  },

  itemview1: {
    justifyContent: 'center',
    paddingHorizontal: 40,
    width: '65%',
  },

  itemview2: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  signInmain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:40,
  },

  signinimage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  signinview1: {
    flexDirection: 'row',
    alignItems:"center",
  },

  signinIcon1: {
    fontSize:20,
    position:"absolute",
    start:15,

  },
  signinput11: {
    width:"80%",
    height:40,
    fontSize:15,
    borderRadius:10,
    borderColor:"black",
    borderWidth:1,
    paddingStart:40,

  },


     signinpbutton:{
      width:"80%",
      height:40,
     
      backgroundColor:"#363030",
      borderRadius:15,
      justifyContent:"center",
      alignItems:"center",
     },
     signupbutton:{
      width:"80%",
      height:40,
    
      backgroundColor:"#36C462",
      borderRadius:15,
      justifyContent:"center",
      alignItems:"center",
     },

     signinbuttontest:{
      fontSize:20,
      fontWeight:"bold",
      color:"white",

  },




  signUpmain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:20,
  },

  signUpimage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  signupview1: {
    flexDirection: 'row',
    alignItems:"center",
  },

  signupIcon1: {
    fontSize:20,
    position:"absolute",
    start:15,

  },
  signupinput11: {
    width:"80%",
    height:40,
    fontSize:15,
    borderRadius:10,
    borderColor:"black",
    borderWidth:1,
    paddingStart:40,

  },

  signupselect: {
    width:"80%",
    height:40,
  
    borderRadius:10,
    borderColor:"black",
    borderWidth:1,
    paddingStart:40,
    paddingTop:8,
   

  },


  signuppviewbutton:{
      width:"80%",
      height:40,
     
      backgroundColor:"#363030",
      borderRadius:15,
      justifyContent:"center",
      alignItems:"center",
     },
     signupviewbutton1:{
      width:"80%",
      height:40,
    
      backgroundColor:"#36C462",
      borderRadius:15,
      justifyContent:"center",
      alignItems:"center",
     },

   

});

export default chat;
