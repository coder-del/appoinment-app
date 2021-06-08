import {Button} from 'react-native-paper';
import {Image, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';

import AppContext from '../contexts/AppContext';
import TextInput from '../input/TextInput';

import logo from '../../assets/images/logo.jpg';
import {createUser, getUser} from '../../utilities/user';
import theme from '../../style/theme';

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  mainContainer: {
    backgroundColor: theme.colors.accent,
    flex: 1,
  },
});

function LoginScreen() {
  const navigation = useNavigation();
  const {setUser} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  navigation.setOptions({
    header: () => null,
  });

  const handleLogin = async () => {
    const newUser = {email, name, mobile};
    const existingUser = await getUser(email);

    if (existingUser?.email) {
      if (existingUser?.name !== name || existingUser?.mobile !== mobile) {
        alert('Please check the name and mobile number');
      } else {
        setUser(newUser);
      }
    } else {
      createUser(newUser)
        .then(() => {
          setUser(newUser);
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  };

  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
      </View>
      <TextInput
        label="username"
        onChangeValue={value => setName(value)}
        title="UserName"
        value={name}
      />
      <TextInput
        keyboardType="email-address"
        label="e-mail"
        onChangeValue={value => setEmail(value)}
        title="Email"
        value={email}
        validate={email && validateEmail()}
        validateText={'Email is not  Correct'}
      />
      <TextInput
        keyboardType="number-pad"
        label="phonenumber"
        onChangeValue={value => setMobile(value)}
        title="PhoneNumber"
        value={mobile}
        maxLength={10}
      />
      <View style={styles.button}>
        <Button
          disabled={false}
          labelStyle={{color: theme.colors.accent}}
          onPress={handleLogin}
          mode={true ? 'contained' : 'outlined'}>
          Register
        </Button>
      </View>
    </View>
  );
}

export default LoginScreen;
