import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const client =  axios.create({baseURL:'https://spoonacular.com/food-api/docs#Search-Recipes-Complex'})

  const Form = () =>{
    const [email, onChangeeMail] = React.useState("");
    const [password, onChangepassword] = React.useState("");  

    const validar = () =>{
      console.log("entro a validar")
      if(!email || !password){
        console.log("a");
       /* <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Alert</Alert.Heading>
        <p>
          Alert
        </p>
      </Alert>*/
      }
      if(!password) return "password"
      else{
        console.log("salio de validar")
      }
      
      return undefined
    }

    const guardar = () => {
      console.log("entro a guardar")
      let campo = validar()
      if (!campo) {
        let obj = {
          "Mail": email,
          "password": password
        };
        console.log(obj)
        client.post('https://spoonacular.com/food-api/docs#Search-Recipes-Complex', obj)        
        .then(response => response.data)
        console.log("llego al axios")
      }
    }

  return (
        
    <>
    <View>
              
              <TextInput  placeholder="Usuario"   onChangeText={onChangeeMail} value={email} />              
              <TextInput  placeholder="password"   onChangeText={onChangepassword} value={password} />
      
            <Button onPress={guardar} title="SIGUIENTE" />
            
               
            
              
      </View>
    </>  
      
  );  

  }
export default Form;