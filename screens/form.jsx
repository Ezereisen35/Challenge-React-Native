import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput,} from 'react-native';

const Registrarse =({navigation})=>{


    const form = async (i) => {
        if(!rubros.NombreyApellido){
          console.log("joyaa")
            Alert.alert("Por favor complete el campo")
        }else{
      
          register(rubros)
      
        }
      } 


return (
      
    <View>
          
          <TextInput style={styles.dato} placeholder="Usuario" />
          <TextInput style={styles.dato} placeholder="Contraseña" />
  
          
          <Text>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>
          <TextInput type="submit" />
         
          <TouchableOpacity
        onPress={() =>form()}
        >
        <Text style={styles.button3Text}>
                Siguiente
            </Text>
        </TouchableOpacity>

  </View>
);  
}

export default Form