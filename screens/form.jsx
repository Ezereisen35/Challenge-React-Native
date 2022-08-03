import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

 const Form = () =>{
      const [mail, onChangeMail] = React.useState("");
      const [contra, onChangeContra] = React.useState("");  

    const validar = () =>{
      console.log("a")
      if(!mail) {
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        Cras mattis consectetur purus sit amet fermentum.
      </p>
    </Alert>}
      else{

        console.log("salio bien")
      }
      if(!contra) return "Contraseña"
      return undefined
    }

  return (
        
    <>
    <View>
              
              <TextInput  placeholder="Usuario"   onChangeText={onChangeMail} value={mail} />              
              <TextInput  placeholder="Contraseña"   onChangeText={onChangeContra} value={contra} />
      
            <Button onPress={validar} title="SIGUIENTE" />
            
               
            
              
      </View>
    </>  
      
  );  
}
export default Form