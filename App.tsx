import React, {useState} from 'react';
import { SignIn } from './signIn';
import { SignUp } from './SignUP';
import { Home } from './home';
import { Chat } from './chat';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App(){
  const ui=(

<NavigationContainer>
<Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Sign In" component={SignIn}/>
        <Stack.Screen name="Sign Up" component={SignUp}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Chat" component={Chat}/>
    
      </Stack.Navigator>
    </NavigationContainer>

  );

  
return ui;

}
export default App;