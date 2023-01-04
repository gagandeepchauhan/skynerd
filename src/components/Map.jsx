import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useContext } from 'react';
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../states/contexts/LocationContext";

const Map = () => {
    const { state: { currentLocation, locationNotFound } } = useContext(LocationContext);

    if(locationNotFound){
        return <Text style={styles.errorMessage}>
            Location not found
        </Text>
    }
    if(!currentLocation){
        return <ActivityIndicator size={"small"} style={styles.loader} />
    }

    return (
        <MapView
            style={styles.mapStyle}
            initialRegion={{
                latitude: currentLocation?.latitude,
                longitude: currentLocation?.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            region={{
                latitude: currentLocation?.latitude,
                longitude: currentLocation?.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
        >
            <Circle
                center={{
                    latitude: currentLocation?.latitude,
                    longitude: currentLocation?.longitude
                }}
                radius={30}
                strokeWidth={2}
                strokeColor="rgba(100,200,100,1)"
                fillColor="rgba(10,200,10,0.3)"
            />   
        </MapView>
    )
};

const styles = StyleSheet.create({
    mapStyle:{
        height:300
    },
    loader:{
        marginTop: 50
    },
    errorMessage:{
        color: "red",
        marginTop: 10
    },
});

export default Map;