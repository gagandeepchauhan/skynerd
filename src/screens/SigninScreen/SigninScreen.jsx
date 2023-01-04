import { View } from 'react-native';
import React, { useContext, useState } from 'react';
import styles from "./SigninScreenStyles";
import { Context as AuthContext } from "../../states/contexts/AuthContext";
import NavLink from '../../components/NavLink';
import Spacer from '../../components/Spacer';
import AuthForm from '../../components/AuthForm';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSignin = ({ username, password }) => {
    if(!(username && password)) return;
    setLoading(true);
    signin({
      username,
      password
    }, ()=>{
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
        <NavigationEvents
          onWillBlur = {clearErrorMessage}
        />
        <View style={styles.loginContainer}>
            <AuthForm
              headerText={'Log In'}
              errorMessage={state.errorMessage}
              onSubmit={handleSignin}
              submitButtontext={'Log In'}
              loading={loading}
            />
            <Spacer/>
            <NavLink
              text={'Not signed up yet?'}
              routeName={'Signup'}
            />
        </View>
    </View>
  )
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default SigninScreen;