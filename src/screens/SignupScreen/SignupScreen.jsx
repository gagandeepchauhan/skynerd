import { View } from 'react-native';
import React, { useContext, useState } from 'react';
import styles from "./SignupScreenStyles";
import { Context as AuthContext } from "../../states/contexts/AuthContext";
import NavLink from '../../components/NavLink';
import AuthForm from '../../components/AuthForm';
import Spacer from '../../components/Spacer';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSignup = ({ username, password }) => {
    if(!(username && password)) return;
    setLoading(true);
    signup({
      username,
      password
    }, ()=>{
      setLoading(false);
    });
  }

  return (
    <View style={styles.container}>
        <NavigationEvents
          onWillBlur = {clearErrorMessage}
        />
        <View style={styles.loginContainer}>
          <AuthForm
            headerText={'Sign Up'}
            errorMessage={state.errorMessage}
            onSubmit={handleSignup}
            submitButtontext={'Sign Up'}
            loading={loading}
          />
          <Spacer/>
          <NavLink
            text={'Aleady have an account?'}
            routeName={'Signin'}
          />
        </View>
    </View>
  )
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default SignupScreen;