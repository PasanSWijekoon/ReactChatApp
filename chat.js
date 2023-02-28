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
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
import { SelectList } from 'react-native-dropdown-select-list';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import SelectDropdown from 'react-native-select-dropdown'




export function Chat() {

  const [masege ,setmessage] = useState("");

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
          placeholder={'Enter Your Massage'} onChangeText={setmessage}></TextInput>

<TouchableOpacity onPress={savechat}>
        <Icon name="send" size={30} color="blue" style={styles.chatimage1} />
</TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return ui;

  function massegehso(){
    Alert.alert("Response",r.responseText);
  }

 async function savechat(){
  var userJsonText = await AsyncStorage.getItem("user");
  var fromJsonobj = JSON.parse(userJsonText);
    var reqestobject = {
      "from_user_id":fromJsonobj.id,
      "from_to_id":1,
      "massage":masege,

    };

    
    const formData = new FormData();
    formData.append("requestJSON",JSON.stringify(reqestobject));
  
  
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
  
        
       
        }
      };
   
  
    request.open('POST', 'http://10.0.2.2/react_chat_php/savechat.php', true);
    request.send(formData);
  
  
  
  
  
  }
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
    width: '15%',
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


