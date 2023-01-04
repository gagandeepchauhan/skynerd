import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import styles from "./AccountScreenStyles";
import { Context as AuthContext } from "../../states/contexts/AuthContext";
import Spacer from '../../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Account Settings</Text>
      <Spacer/>
      <TouchableOpacity
        onPress={signout}
      >
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
};

export default AccountScreen;