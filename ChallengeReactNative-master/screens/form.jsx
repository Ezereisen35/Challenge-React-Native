import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

 const Form = () =>{
      const [mail, onChangeMail] = React.useState("");
      const [contra, onChangeContra] = React.useState("");  

    const validar = () =>{
      if(!mail) {
        console.log("ingrese algo");
      }
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