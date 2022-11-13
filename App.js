import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';

import BookTile from './component/BookTile'
export default function App() {
  return (
    <ScrollView style={StyleSheet.container}>
         <Text style={styles.header1}>Bookshop</Text>
        <View style={styles.tilesContainer}>
          <BookTile title="Book Title" subtitlepwd="by some random dude" text="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw," isbn="ISBN 123456789" />
          <BookTile title="Book Title" subtitlepwd="by some random dude" text="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw," isbn="ISBN 123456789" />
          <BookTile title="Book Title" subtitlepwd="by some random dude" text="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw," isbn="ISBN 123456789" />
          <BookTile title="Book Title" subtitlepwd="by some random dude" text="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw," isbn="ISBN 123456789" />
          <BookTile title="Book Title" subtitlepwd="by some random dude" text="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw," isbn="ISBN 123456789" />
          
          <StatusBar style="auto"/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  },

  tile: {
    flexBasis: '46%',//200
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
  },

  btn:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'flex-end',
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
  },
 

});