import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Modal} from 'react-native';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

    const onHandleChangeItem = (t) => {
      setTextItem(t)
    };

    const addItem = () => {
      setItemList(currentItems => [
        ...currentItems,  
        {id: Math.random().toString(), value: textItem}
      ])
      /*setItemList([...itemList, textItem])*/

      setTextItem('')
    };
      const renderItem = ({item}) =>(
      <View style= {styles.items}>
            <Text>{item.value}</Text>
            <Button title='elegir'/>
          </View>
    )

  return (
    <View style={styles.container}>
      <Text>Shopping List</Text>
      <View style={styles.addItems}>

        <TextInput 
        value={textItem}
        style={styles.imputItem }
        placeholder='Agrega un Item'
        onChangeText={onHandleChangeItem}
        />

        <Button 
        title='Agregar'
        onPress={addItem}
        />
      </View>
      
      <View>
       <FlatList
       data={itemList}
       renderItem= {renderItem}
       keyExtractor={(item) => item.id}
       />
      </View>

     
  
      


      
    </View> 

      
    
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 30,
     marginTop: 50
    },

     items: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'orange'
     },

     imputItem: {
      borderBottomColor: 'orange',
          borderBottomWidth: 5
     },
     
    addItems:{
      textAlign: 'center',
      color: 'green',
      padding: 40
    } ,
    button: {
      textAlign: 'center',
      color:'red',
      backgroundColor:'black',
      padding: 20,
      height: 50,
    }


});
