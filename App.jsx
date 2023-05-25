// import * as React from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './src/components/Header';
import HomeScreen from './src/components/HomeScreen';
import NewPredict from './src/components/NewPredict';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPredict" component={NewPredict} />
      </Stack.Navigator>
      <Header />
    </NavigationContainer>
  );
}

export default App;
