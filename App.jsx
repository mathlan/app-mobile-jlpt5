import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const YourApp = () => {
  // States

  // Liste des notes
  const [notes, setNotes] = useState([]);

  // // Nouvelle note
  // const [newNote, setNewNote] = useState({});

  // Text input(
  const [text, setText] = useState('');

  // Date picker
  const [date, setDate] = useState(new Date());

  // Ajouter une note
  const handleAdd = () => {
    const newNote = {nom: text, date: date.toString()};
    setNotes([...notes, newNote]);
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

      <DatePicker date={date} onDateChange={setDate} />

      <Button title="Envoyer" onPress={() => handleAdd()} />

      {notes.sort().map((note, index) => {
        return (
          <Text key={index}>
            {note.nom} {note.date}
          </Text>
        );
      })}
    </View>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// return (
//   <TextInput
//     style={styles.input}
//     onChangeText={onChangeText}
//     value={text}
//     placeholder="Votre note"
//   />

//   <Button
//     title="Envoyer"
//     onPress={() => Alert.alert('Button with adjusted color pressed')}
//   />
// );

// export default TextInputExample;

// function blabla () {}
// const blabla = () => {}

// date: new Date().toLocaleDateString('fr', {
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
// }),
