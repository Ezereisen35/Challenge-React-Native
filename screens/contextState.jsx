import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';


const HomeScreen = ({ navigation }) => {

    const initialState = {
        loading:true,
        user:{token: 'a'}
    }




    const ActionTypes = {
        setUser: 'SET_USER'
    }

    const reducer = (state = {}, action) => {

        
    }

}

export default HomeScreen;