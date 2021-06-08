import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import * as React from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

import theme from '../../style/theme';

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
  },
  content: {
    alignItems: 'center',
  },
});

function AppHeaderBar({previous, handleSignOut, icon, title}) {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.header}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.accent}
        />
      ) : null}
      <Appbar.Content
        title={title}
        style={styles.content}
        color={theme.colors.accent}
      />
      {icon ? (
        <Appbar.Action
          icon={icon}
          color={theme.colors.accent}
          onPress={handleSignOut}
        />
      ) : null}
    </Appbar.Header>
  );
}

AppHeaderBar.defaultProps = {
  icon: null,
};

AppHeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppHeaderBar;
