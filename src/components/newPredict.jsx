import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

const NewPredict = ({navigation}) => {
  // Liste des notes
  const [notes, setNotes] = useState([]);
  // Text input(
  const [text, setText] = useState('');
  // Date picker
  const [date, setDate] = useState(new Date());

  // Ajouter une note
  const handleAdd = () => {
    const newNote = {nom: text, date: date.toString()};
    setNotes([...notes, newNote]);
    console.log([...notes, newNote]);
    navigation.navigate('HomeScreen', {
      notes: [...notes, newNote],
      // Trop rapide, il faut attendre l'actualisation du state
    });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Votre note"
        onChangeText={inputText => {
          setText(inputText);
        }}
      />

      <DatePicker
        date={date}
        onDateChange={setDate}
        mode="date"
        minimumDate={new Date()}
      />

      <Button title="Envoyer" onPress={() => handleAdd()} />

      {/* <Button
        title="Retour"
        onPress={() =>
          navigation.navigate('HomeScreen', {
            notes: notes,
          })
        }
      /> */}

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('NewPredict')}
      /> */}

      {/* {notes.sort().map((note, index) => {
        return (
          <Text key={index}>
            {note.nom} {note.date}
          </Text>
        );
      })} */}
    </View>
  );
};

export default NewPredict;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
