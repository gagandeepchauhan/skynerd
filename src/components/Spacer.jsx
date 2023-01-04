import { View, StyleSheet } from 'react-native';
import React from 'react';

const Spacer = () => {
  return (
    <View style={styles.space}></View>
  )
};

const styles = StyleSheet.create({
    space:{
        marginTop: 15
    }
});

export default Spacer;