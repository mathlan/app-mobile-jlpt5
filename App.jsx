// import * as React from 'react';
import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/homeScreen';
import NewPredict from './src/components/newPredict';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPredict" component={NewPredict} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
