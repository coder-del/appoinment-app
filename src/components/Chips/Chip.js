import {Chip} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import React from 'react';

import theme from '../../style/theme';

const styles = StyleSheet.create({
  container: {
    margin: 8,
    width: 160,
  },
  textStyle: {
    width: 140,
  },
});

function ChipItem({children, disabled, onPress, selected}) {
  return (
    <Chip
      mode={selected || disabled ? 'flat' : 'outlined'}
      style={[
        styles.container,
        {
          backgroundColor: selected
            ? theme.colors.primary
            : theme.colors.accent,
        },
        disabled && {backgroundColor: theme.colors.basic},
      ]}
      textStyle={[
        styles.textStyle,
        {color: selected ? theme.colors.accent : theme.colors.dark},
      ]}
      onPress={() => {
        if (!disabled) {
          onPress();
        }
      }}>
      {children}
    </Chip>
  );
}

export default ChipItem;
