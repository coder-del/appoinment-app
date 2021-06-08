import {Card, Subheading, Title} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import React from 'react';

import {SLOTS} from '../../utilities/config';
import theme from '../../style/theme';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderColor: theme.colors.primary,
  },
});

function CardItem({title, slotData}) {
  const arr1 = Object.entries(SLOTS);
  const arr2 = slotData.map(e => e[0]);

  const bookedSlots = arr1
    .map(item => {
      if (arr2.includes(item[0])) {
        return item[1];
      }
    })
    .filter(item => item !== undefined);

  console.log(slotData);
  return (
    <Card style={styles.card} mode="outlined">
      <Card.Content>
        <Title>Booked on</Title>
        <Subheading>{title}</Subheading>
        <Subheading>{bookedSlots.join('\n')}</Subheading>
      </Card.Content>
    </Card>
  );
}

export default CardItem;
