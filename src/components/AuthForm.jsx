import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtontext, loading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
        <Text style={styles.headStyle}>{headerText}</Text>
        <Spacer/>
        <TextInput 
            placeholder='username' 
            style={styles.inputStyle} 
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer/>
        <TextInput 
            placeholder='password' 
            style={styles.inputStyle} 
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <Spacer/>
        <Spacer/>
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => onSubmit({ username, password })}
            disabled={loading}
        >
            {loading ?
                <ActivityIndicator size={"small"} color="#fff" />
                :
                <Text style={styles.loginText} >{submitButtontext}</Text>
            }
        </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
    headStyle: {
        fontFamily: 'Poppins',
        fontWeight: "700",
        fontSize: 36,
        textAlign: "center",
        marginBottom: 30
    },
    inputStyle:{
        paddingVertical: 10,
        borderBottomColor: "rgb(227, 232, 234)",
        borderBottomWidth: 1,
        fontSize: 16,
        fontFamily: "Poppins",
    },
    btnStyle:{
        backgroundColor: "rgb(12, 165, 242)",
        padding: 10,
        borderRadius: 5
    },
    loginText:{
        fontSize: 18,
        textAlign: "center",
        color: "#fff",
        fontFamily: "Poppins"
    },
    errorMessage:{
        color: "red",
        marginTop: 5,
        fontFamily: "Poppins"
    }
});

export default AuthForm;