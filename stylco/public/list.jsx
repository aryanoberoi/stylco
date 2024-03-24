
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import React, {useState} from 'react';
import {Text, TextInput, Button} from 'react-native';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ScrollView } from "react-native-web";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsvCc8K2eZhFA3-EziNk35nrm-hTN4EBg",
  authDomain: "stylco-test.firebaseapp.com",
  projectId: "stylco-test",
  storageBucket: "stylco-test.appspot.com",
  messagingSenderId: "392754911180",
  appId: "1:392754911180:web:29f01bc138ba1c21aeaf69",
  measurementId: "G-8EZSZFQTL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


     


const PlaceholderImage = require('./Logo.png');

export default function App() {
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      
      <StatusBar style="auto" />
      <View style={styles.fixToText}>
        <Button
          title="Male"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <View style={{width: 20}} />
        <Button
          title="Female"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
    <Button
  title="Submit"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    fontFamily: "Ariel",
  },
  imageContainer: {
    paddingTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:30,
    padding:20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});