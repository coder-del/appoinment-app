import {Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';

import Chip from '../Chips/Chip';
import AppContext from '../contexts/AppContext';
import {SLOTS} from '../../utilities/config';

import {createAppointment, getSlotByDate} from '../../utilities/appointments';
import theme from '../../style/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  button: {
    margin: 16,
  },
});

function SlotItem({date, onSuccess}) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const {user: {email} = {}} = useContext(AppContext);

  useEffect(() => {
    getSlotByDate(date).then(res => {
      setBookedSlots(Object.keys(res));
    });
  }, []);

  const bookAppointment = () => {
    createAppointment({
      date,
      email,
      slot: selectedSlot,
    })
      .then(() => {
        console.log('success');
        onSuccess();
      })
      .catch(error => {
        console.log({error});
      });
  };

  return (
    <View style={styles.container}>
      {Object.entries(SLOTS)?.map(([name, time]) => {
        return (
          <Chip
            onPress={() => {
              setSelectedSlot(name);
            }}
            disabled={bookedSlots?.includes(name)}
            selected={name === selectedSlot}>
            {time}
          </Chip>
        );
      })}
      <View>
        <Button
          disabled={!selectedSlot}
          labelStyle={{color: theme.colors.accent}}
          mode={'contained'}
          onPress={bookAppointment}
          style={styles.button}>
          Book Appoinment
        </Button>
      </View>
    </View>
  );
}

export default SlotItem;
