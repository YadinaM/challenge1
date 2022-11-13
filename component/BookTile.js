import { StyleSheet, Text, View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';

const BookTile = (props)=>{
    return(
        <View style={styles.tile}>
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>{props.title}</Text>
          <Text style={styles.tileText}>{props.subtitlepwd}</Text>
          <Text style={styles.tileSmalText}>{props.text}</Text>
          <View style={styles.naast}>
            <Text style={styles.tileSmalText}>{props.isbn}</Text>
            <TouchableNativeFeedback onPress={() => handlePress()}>
                    <View style={styles.btn}>
                        <Text style={styles.tileText}>read me</Text>
                    </View>
                </TouchableNativeFeedback>
          </View>
         
         
            
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    header1: {
        fontSize: 32,
        fontWeight: '800',
        margin: 12,
      },
      container: {
        backgroundColor: '#fff',
        paddingTop: 56,
      },
      tilesContainer: {
        flexGrow: 0,
        flexShrink: 0,
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
        borderRadius: 5,
        borderColor: '#B4B8DA',
        borderWidth: 1,
        borderStyle: 'solid',
        marginVertical: '2%',
        marginRight: '2%',
      },

      tileDetail: {
        padding: 10,
      },
      tileHeader: {
        fontSize: 22,
        fontWeight: '600',
      },
      tileText: {
        fontSize: 16,
        fontWeight: '500',
      },
      tileSmalText: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: '2%',
        marginRight: '2%'
      },

      naast:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 0,
        flexShrink: 0,
        justifyContent: 'space-between',
      }
})

export default BookTile;