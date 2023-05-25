// rnfes (raccourci pour création rapide)
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const KanjiDetail = ({route, navigation}) => {

  let kanji;
  if (route.params) {
    kanji = route.params.kanji;
  }

  // Pour mélanger du html et du JS il faut utiliser des `` et ${variable}
  const req = `https://kanjiapi.dev/v1/kanji/${kanji}`;

  const response = axios.get(`${req}`);

  const [kanjiInfo, setKanjiInfo] = useState();

  // Switch anglais/francais
  const [frEn, setFrEn] = useState();  

    // Switch romanji/kanji
    const [roKan, setRoKan] = useState();  

  useEffect(() => {
    const getKanjiInfo = async () => {
      const response = await axios.get(`${req}`);
      setKanjiInfo(response.data);
    }
    getKanjiInfo();
}, [])


// Le useEffect permet d'activer le setFrEn une fois que kanjiInfo est défini (il n'est pas chargé assez vite)
useEffect(() => {
    if(kanjiInfo){
        setFrEn(kanjiInfo.meanings[0]);
        setRoKan(kanjiInfo.kun_readings[0]);
    }
}, [kanjiInfo])


  return (
    // Fragment <> </> -> Div invisible
    // Il faut tjr une balise parent si on display deux éléments de JSX (les touchableopacity là en bas)
    <View style={styles.container}>
    {kanjiInfo ? (
        <><TouchableOpacity style={styles.button} onPress={() => {
            frEn === kanjiInfo.meanings[0] ? setFrEn("fr") : setFrEn(kanjiInfo.meanings[0]);
        }}>
                  <Text style={styles.text}>{frEn}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {
                roKan === kanjiInfo.kun_readings[0] ? setRoKan("romanji") : setRoKan(kanjiInfo.kun_readings[0]);
              }}>
                      <Text style={styles.text}>{roKan}</Text>
                  </TouchableOpacity></>
    ) : <Text>Loading</Text>}
    </View>
    

  );
};

export default KanjiDetail;

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
      width: '100%',
      padding: 40,
      margin: 5,
    },
    text: {
        fontSize: 25,
      },
  });
