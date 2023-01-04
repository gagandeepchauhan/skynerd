import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import styles from "./VehicleListScreenStyles";
import { Context as VehicleContext } from "../../states/contexts/VehicleContext";
import VehicleItem from '../../components/VehicleItem';
import { TextInput } from 'react-native-gesture-handler';
import useDebounce from '../../hooks/useDebounce';

const VehicleListScreen = ({navigation}) => {
  const { state, getVehicleList } = useContext(VehicleContext);
  const [vehicles, setVehicles] = useState([]);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useDebounce(()=>{
    setDebouncedQuery(query);
  }, [query], 500);

  const getSortOrder = useCallback((term, search)=>{
    if(term.toLowerCase() === search.toLowerCase()) return 0;
    if(term.toLowerCase().startsWith(search.toLowerCase())) return 1;
    return 2;
  },[]);

  const getSortedVehicles = useCallback(()=>{
    if(!debouncedQuery){
      setVehicles(state.vehicles);
      return;
    }
    let tempVehicles = state.vehicles
      .filter(item=>item.registrationNumber.toLowerCase().includes(debouncedQuery.toLowerCase()))
      .sort((a,b) => getSortOrder(a.registrationNumber,debouncedQuery) - getSortOrder(b.registrationNumber,debouncedQuery));
    setVehicles(tempVehicles);
  },[state, debouncedQuery, getSortOrder]);

  useEffect(()=>{
    getVehicleList(()=>{
      setLoading(false);
    });
  },[]);

  useEffect(()=>{
    setVehicles(state.vehicles);
  },[state]);

  useEffect(()=>{
    getSortedVehicles();
  }, [debouncedQuery]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Vehicles</Text>
      {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      <TextInput
        placeholder='search'
        style={styles.search}
        value={query}
        onChangeText={setQuery}
      />
      {loading ? <ActivityIndicator style={styles.loading}/> : null}
      {vehicles?.length === 0 && !loading ? <Text style={styles.noMatchText}>No vehicles found</Text> : null}
      <FlatList
        data={vehicles}
        style={styles.vehicleList}
        keyExtractor={(item, idx) => item.id + idx}
        renderItem={({item}) => {
          return <VehicleItem
            data={item}
          />
        }}
      />
    </View>
  )
};

VehicleListScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default VehicleListScreen;