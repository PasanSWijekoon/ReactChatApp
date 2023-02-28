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




export function Home({navigation}) {

  const [items, setitems] = useState([
  
  
  
  ]);

  async function loadfriends(){

    const userJsonText = await AsyncStorage.getItem("user");
    const formData = new FormData();
    formData.append("userJsonText",userJsonText);
  
  
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
  
        var response = request.responseText;
        var JS_object = JSON.parse(response);
        setitems(JS_object);
       
        }
      };
   
  
    request.open('POST', 'http://10.0.2.2/react_chat_php/load_users.php', true);
    request.send(formData);
  
  
  
  
  }
  loadfriends();


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
function itemUI({item}) {
  const ui = (
    <Pressable onPress={mmm}>
    <View style={styles.item}>
      <Image source={{uri: "http://10.0.2.2/react_chat_php/"+item.pic}} style={styles.itemImage}></Image>
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
    </Pressable>
  );

  return ui;
   function mmm(){

 

   const obj = {"name":item.name,"id":item.id,"img":"http://10.0.2.2/react_chat_php/"+item.pic,};
   navigation.navigate("Chat",obj);
  }
}
 
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


