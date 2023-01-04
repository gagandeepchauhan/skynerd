import { View, Text } from 'react-native';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import styles from "./VehicleDetailScreenStyles";
import Map from '../../components/Map';
import Spacer from '../../components/Spacer';
import { Context as LocationContext } from "../../states/contexts/LocationContext";
import useLocation from '../../hooks/useLocation';
import { NavigationEvents, withNavigationFocus } from 'react-navigation';

const VehicleDetailScreen = ({ isFocused, navigation }) => {
  const { state: { currentLocation }, addLocation, setLocationNotFound } = useContext(LocationContext);
  const data = navigation.getParam("data");
  const locationReference = useMemo(() => `${data?.id}-${data?.registrationNumber}/location`, []);
  const locationCallback = useCallback(addLocation,[]);
  const [error] = useLocation(isFocused, locationReference , locationCallback);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={() => setLocationNotFound(false)}
      />
      <Text style={styles.textStyle}>Vehicle Track</Text>
      <View style={styles.detail}>
        <Text style={styles.registrationNumber}>{data?.registrationNumber}</Text>
        <Text style={styles.type}>{data?.type}</Text>
      </View>
      <Map/>
      <Spacer/>
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      {currentLocation
        ? <Text style={styles.odometer}>Total Odometer - {currentLocation?.totalOdometer}</Text>
        : null
      }
    </View>
  )
};

// VehicleDetailScreen.navigationOptions = () => {
//   return {
//     headerShown: false
//   }
// }

export default withNavigationFocus(VehicleDetailScreen);