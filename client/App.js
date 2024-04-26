import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textelelement}>FarmFreshDirect</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00002c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textelelement:{

    backgroundColor:'#cccc',
    textAlign:'center'
  }
});
