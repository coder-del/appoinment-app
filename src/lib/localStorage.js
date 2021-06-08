import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async key => {
  const data = await AsyncStorage.getItem(key);

  if (typeof data === 'string') {
    return JSON.parse(data);
  }

  return data;
};

export const setItem = async (key, value) => {
  let valueStr = value;

  if (typeof valueStr === 'object') {
    valueStr = JSON.stringify(value);
  }

  return AsyncStorage.setItem(key, valueStr);
};

export const removeItem = async key => AsyncStorage.removeItem(key);
