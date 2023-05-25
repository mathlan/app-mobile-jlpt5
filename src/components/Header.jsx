import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = () => {
  const navigation = useNavigation();
  //console.log(navigation);
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Text style={styles.menutext}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewPredict');
        }}>
        <Text style={styles.menutext}>Nouveau</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingTop: 10,
    bottom: 0,
  },
  menutext: {
    color: 'black',
  },
});

export default Header;
