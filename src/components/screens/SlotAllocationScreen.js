import {Headline, Title} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import React from 'react';

import AppHeaderBar from '../bars/AppBar';
import SlotsView from '../views//SlotsView';
import theme from '../../style/theme';

const styles = StyleSheet.create({
  button: {
    color: theme.colors.accent,
    height: 50,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: theme.colors.accent,
    flex: 1,
  },
  dateWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  dateContainer: {
    color: theme.colors.primary,
  },
});

function ScheduleScreen({navigation, route}) {
  const date = route?.params?.data;

  navigation.setOptions({
    header: () => <AppHeaderBar title="Schedule Appoinment" previous />,
  });

  const onSuccess = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateWrapper}>
        <Title style={styles.title}>Select a time slot on </Title>
        <Headline style={styles.dateContainer}>{date}</Headline>
      </View>
      <SlotsView date={date} onSuccess={onSuccess} />
    </View>
  );
}

export default ScheduleScreen;
