import { useEffect, useState } from 'react';
// import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import { database } from '../firebase';

const useLocation = (shouldTrack, locationReference, callback) => {
    const [error, setError] = useState();

    useEffect(()=>{
        let onValueChange;
        const startWatching = async () => {
            try{
                onValueChange = database.ref(locationReference).on('value', (snapshot) => {
                    callback(snapshot.val());
                });
            }catch(err){
                setError("Something went wrong");
            }
        };
        if(shouldTrack){
            startWatching();
        }else{
            if(onValueChange){
                database.ref(locationReference).off('value', onValueChange);
            }
            onValueChange = null;
        }
        return () => {
            if(onValueChange)
                database.ref(locationReference).off('value', onValueChange);
        };
    },[shouldTrack, locationReference, callback]);

    return [error];
};

export default useLocation;