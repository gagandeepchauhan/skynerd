import createDataContext from "./createDataContext"
import api from "../../api";
import { navigate } from "../../navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
    switch(action.type){
        case "add_error" : 
            return { ...state, errorMessage: action.payload };
        case "signin" : 
            return { errorMessage: '', token: action.payload };
        case "clear_error_message" :
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
};

const signup = dispatch => async ({ username, password }, callback) => {
    try{
        

    }catch(err){

    }finally{
        if(callback) callback();
    }
};

const signin = dispatch => async ({ username, password }, callback) => {
    try{
        const response = await api.post('/auth/login', {
            username,
            password
        });
        const token = response.data?.token;
        await AsyncStorage.setItem("skynerd_token", token);
        dispatch({
            type: "signin",
            payload: token
        });
        navigate("mainFlow");
    }catch(err){
        console.log(err);
        dispatch({
            type: "add_error",
            payload: "Something went wrong"
        });
    }finally{
        if(callback) callback();
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem("skynerd_token");
    dispatch({
        type: "signout"
    });
    navigate("loginFlow");
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: "clear_error_message" });
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem("skynerd_token");
    if(token){
        dispatch({
            type: "signin",
            payload: token
        });
        navigate("mainFlow");
    }else{
        navigate("loginFlow");
    }
};

const initialValue = {
    token: null,
    errorMessage: ''
}

export const { Context, Provider } = createDataContext(
    authReducer, 
    { signin, signup, signout, clearErrorMessage, tryLocalSignin }, 
    initialValue
);