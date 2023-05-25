import React from 'react';
import {Text, View, Button} from 'react-native';

let notes = {};

const HomeScreen = ({route, navigation}) => {
  if (route.params) {
    console.log(route.params);
    notes = route.params.notes;
    console.log(notes);
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      {notes.sort().map((note, index) => {
        return (
          <Text key={index}>
            {note.nom} {note.date}
          </Text>
        );
      })}

      <Button
        title="Nouvelle prédiction"
        onPress={() => navigation.navigate('NewPredict')}
      />
    </View>
  );
};

export default HomeScreen;
