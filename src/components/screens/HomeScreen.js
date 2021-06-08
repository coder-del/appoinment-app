import {FlatList, StyleSheet, View, Text} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React, {useContext, useCallback, useState} from 'react';

import AppHeaderBar from '../bars/AppBar';
import AppContext from '../contexts/AppContext';
import CardItem from '../layout/Card';
import FabButton from '../buttons/FabButton';

import {getSlotByEmail} from '../../utilities/appointments';
import DateFunction from '../../utilities/dateFunction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  textWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

function HomeScreen() {
  const navigation = useNavigation();
  const {user: {email} = {}} = useContext(AppContext);
  const [bookedSlots, setBookedSlots] = useState([]);
  const {setUser} = useContext(AppContext);

  useFocusEffect(
    useCallback(() => {
      getSlotByEmail(email).then(res => {
        setBookedSlots(Object.entries(res));
      });
    }, [email]),
  );

  navigation.setOptions({
    header: () => (
      <AppHeaderBar
        title="Welcome"
        icon={'power'}
        handleSignOut={() => setUser('')}
      />
    ),
  });

  const renderItem = ({item}) => {
    return <CardItem title={item[0]} slotData={item[1]} />;
  };

  return (
    <View style={styles.container}>
      {!bookedSlots.length > 0 && (
        <View style={styles.textWrapper}>
          <Text style={styles.text}> You have no scheduled slot</Text>
        </View>
      )}
      <FlatList
        data={bookedSlots}
        renderItem={renderItem}
        keyExtractor={item => item}
        extraData={bookedSlots}
      />
      <FabButton DateFunction={DateFunction} />
    </View>
  );
}

export default HomeScreen;
