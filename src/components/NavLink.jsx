import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <>
        <TouchableOpacity
            onPress={()=> navigation.navigate(routeName)}
        >
            <Text style={styles.linkStyle}>{text}</Text>
        </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
    linkStyle:{
        color: "rgb(12, 165, 242)",
        fontFamily: "Poppins"
    }
});

export default withNavigation(NavLink);