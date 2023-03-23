import React, {useState} from 'react';
import { SignIn } from './signIn';
import { SignUp } from './SignUP';
import { Home } from './home';
import { Chat } from './chat';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function App(){
  async function checkUser(){

    const  user = await AsyncStorage.getItem("user");
  return user;
  }
  
  const ui=(

<NavigationContainer>
<Stack.Navigator initialRouteName={"SignIn"}>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Home" component={Home}  options={{
				headerShown: false,
				
			}}/>
        <Stack.Screen name="Chat" component={Chat}/>
    
      </Stack.Navigator>
    </NavigationContainer>

  );

  
return ui;



}
export default App;