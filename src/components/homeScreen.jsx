import React, {useEffect, useState} from 'react';
import {Text, ScrollView, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';

const HomeScreen = ({route, navigation}) => {

  const grade1 = 'https://kanjiapi.dev/v1/kanji/grade-1';
  
  const [kanji, setKanji] = useState();
  
  // useEffect (2 params) -> La fonction flèchée () => {} + Ce qui relance la fonction flèchée
  useEffect(() => {
    const getKanji = async () => {
      const response = await axios.get(`${grade1}`);
      setKanji(response.data);
    }
    getKanji();
  }, [])

  // console.log('Kanji', kanji)
  // clo (reccourci Console.log)


  return (
    <ScrollView>
      <View style={styles.container}>

      {kanji ? kanji.map((kanji, index) => {
    console.log('kanji', kanji)
    return (
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('KanjiDetail', {
        kanji: [kanji],
      });
      }}>
        
      <Text key={index}>
        {kanji}
      </Text>
      </TouchableOpacity>
    );
  }
  ) : <Text>Loading</Text>}

      {/* <Button
        title="Nouvelle prédiction"
        onPress={() => navigation.navigate('NewPredict')}
      /> */}
            <Button
        title="Nouvelle prédiction"
        onPress={() => navigation.navigate('KanjiDetail')}
      />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    margin: 5,
  },
});

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
