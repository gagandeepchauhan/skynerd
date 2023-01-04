import createDataContext from "./createDataContext"
import api from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const vehicleReducer = (state, action) => {
    switch(action.type){
        case "set_vehicles" :
            return { errorMessage: '', vehicles: action.payload }
        case "add_error" : 
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};

const getVehicleList = dispatch => async (callback) => {
    try{
        const token = await AsyncStorage.getItem("skynerd_token");
        const response = await api.get('/vehicles', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({
            type: "set_vehicles",
            payload: response.data?.data ?? []
        });
    }catch(err){
        console.log(err);
        dispatch({
            type: "add_error",
            payload: "Unable to fetch vehicles"
        });
    }finally{
        if(callback) callback();
    }
};

const initialValue = {
    errorMessage: '',
    vehicles: []
};

export const { Context, Provider } = createDataContext(
    vehicleReducer, 
    { getVehicleList }, 
    initialValue
);