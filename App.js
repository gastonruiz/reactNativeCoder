import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30, marginTop: 15}}>
      <View>
        <TextInput/>
        <Button title="ADD" style={{padding:10}}/>

      </View>
      <View>

      </View>
      <Text>Hola Coder!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
