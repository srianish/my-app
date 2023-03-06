
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}  >
        <Text style={styles.headText}>Facebook</Text>
      </View>
      <ScrollView style={styles.mid}  >
        <View style={styles.card}></View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {   
    position : "relative",
    height : "100%",
    width : "100%",
    backgroundColor: "white"
    
  },
  head : {
    position : 'absolute',
    left : 0,
    right : 0,
    top : 0,
    bottom : "85%",
    backgroundColor: "blue",
    borderRadius: "4%"
   
    
  },
  headText :{
    fontSize: 20,
    position : 'absolute',
    left : 15,
    top : "45%",
    color: "white",
    fontWeight:"bold"

  },
  mid :{
    position : 'absolute',
    left : 0,
    right : 0,
    top : "12%",
    bottom : 0,
    backgroundColor: "lightblue",
    borderRadius: 15
  } ,
  card :{
    width : (Dimensions.get('window').width*30/100) ,
    height : (Dimensions.get('window').height*15/100) ,
    backgroundColor: "pink",
   
  
  } 
});
