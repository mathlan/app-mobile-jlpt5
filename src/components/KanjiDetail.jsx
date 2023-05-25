// rnfes (raccourci pour création rapide)
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const KanjiDetail = ({route, navigation}) => {
  let kanji;
  if (route.params) {
    kanji = route.params.kanji;
  }

  console.log('kanji', kanji);
  return (
    <View>
      <Text>{kanji}</Text>
    </View>
  );
};

export default KanjiDetail;

const styles = StyleSheet.create({});
