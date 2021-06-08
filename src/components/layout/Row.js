import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

function Row({style, children}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

Row.defaultProps = {
  style: null,
};

Row.propTypes = {
  style: PropTypes.object,
};

export default Row;
