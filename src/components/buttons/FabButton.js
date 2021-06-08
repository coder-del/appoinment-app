import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import theme from '../../style/theme';

function FabButton({fabStyle, DateFunction}) {
  const navigation = useNavigation();

  const {today, tomorrow, dayAfterTomorrow} = {...DateFunction};

  const [state, setState] = React.useState({open: false});
  const onStateChange = ({open}) => setState({open});
  const {open} = state;

  const handleSlotBooking = date => {
    navigation.navigate('Slot', {
      data: date,
    });
  };

  return (
    <FAB.Group
      open={open}
      icon={open ? 'calendar-today' : 'plus'}
      color={theme.colors.accent}
      fabStyle={[fabStyle, {backgroundColor: theme.colors.primary}]}
      actions={[
        {
          // icon: 'plus',
          label: 'Book Appoinment',
          color: theme.colors.accent,
          style: {backgroundColor: theme.colors.primary},
          // onPress: () => console.log('Pressed add'),
        },
        {
          icon: 'plus',
          label: today,
          color: theme.colors.primary,
          onPress: () => handleSlotBooking(today),
        },
        {
          icon: 'plus',
          label: tomorrow,
          color: theme.colors.primary,
          onPress: () => handleSlotBooking(tomorrow),
        },
        {
          icon: 'plus',
          label: dayAfterTomorrow,
          color: theme.colors.primary,
          onPress: () => handleSlotBooking(dayAfterTomorrow),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          //do
        }
      }}
    />
  );
}

export default FabButton;
