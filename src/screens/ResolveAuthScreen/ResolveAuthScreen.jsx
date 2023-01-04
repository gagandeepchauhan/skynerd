import { View, Text, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect, useRef } from 'react';
import { Context as AuthContext } from "../../states/contexts/AuthContext";
import styles from "./ResolveAuthScreenStyles";
import useTimeout from '../../hooks/useTimeout';
import Spacer from '../../components/Spacer';

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);
    const firstTimeRef = useRef(true);

    useTimeout(()=>{
        if(firstTimeRef.current){
            firstTimeRef.current = false;
            tryLocalSignin();
        }
    },600);

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Skynerd</Text>
            <Spacer/>
            <ActivityIndicator size={"small"}/>
        </View>
    )
};

export default ResolveAuthScreen;