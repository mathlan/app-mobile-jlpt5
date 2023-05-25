import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  // Liste des notes
  const [notesNewPredict, setNotesNewPredict] = useState([]);

  let notes;
  if (route.params) {
    notes = route.params.notes;
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      {notes &&
        notes.sort().map((note, index) => {
          //   setNotesNewPredict([...notesNewPredict, note]);
          //   console.log(notesNewPredict);
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

// {notes &&
//     notes.sort().map((note, index) => {
//       setNotesNewPredict([...notesNewPredict, note]);
//       console.log(notesNewPredict);
//     })}

//   {notesNewPredict &&
//     notesNewPredict.sort().map((note, index) => {
//       //   setNotesNewPredict([...notesNewPredict, note]);
//       //   console.log(notesNewPredict);
//       return (
//         <Text key={index}>
//           {note.nom} {note.date}
//         </Text>
//       );
//     })}
