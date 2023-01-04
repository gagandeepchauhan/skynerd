import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch(action.type){
        case "add_current_location":
            return { ...state, currentLocation: action.payload, locationNotFound: false };
        case "set_location_not_found":
            return { ...state, locationNotFound: action.payload, currentLocation: null };
        default:
            return state;
    }
};

const addLocation = dispatch => (location) => {
    // console.log("Vehicle snapshot - ", location);
    if(location){
        dispatch({
            type: "add_current_location",
            payload: location // location is like {"bearing": 0, "distance": 0, "latitude": 12.9375449, "longitude": 77.5652316, "speed": 0, "timestamp": "2023-01-04T05:21:34.000Z", "totalOdometer": 12740645, "vehicleType": "Mini Truck"}
        });
    }else{
        dispatch({
            type: "set_location_not_found",
            payload: true
        });
    }
};

const setLocationNotFound = dispatch => (notFound) => {
    dispatch({
        type: "set_location_not_found",
        payload: notFound
    });
} 

const initialValue = {
    currentLocation: null,
    locationNotFound: false
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { addLocation, setLocationNotFound },
    initialValue
);