import {StyleSheet, View} from 'react-native';
import {HelperText, TextInput as Input} from 'react-native-paper';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../style/theme';

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: theme.colors.accent,
    margin: 8,
  },
});

function TextInput({
  label,
  onChangeValue,
  title,
  value,
  validate,
  validateText,
  ...arg
}) {
  return (
    <View>
      <Input
        label={label}
        onChangeText={onChangeValue}
        mode="outlined"
        placeholder={label}
        style={styles.textInput}
        value={value}
        {...arg}
        underlineColorAndroid="transparent"
      />
      <HelperText type="error" visible={validate}>
        {validateText}
      </HelperText>
    </View>
  );
}

TextInput.defaultProps = {
  title: 'name',
};

TextInput.propTypes = {
  title: PropTypes.string,
};

export default TextInput;
