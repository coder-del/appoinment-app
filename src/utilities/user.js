import {getItem, setItem} from '../lib/localStorage';

const USERS_KEY = 'users';

export const createUser = user => {
  return new Promise(async (resolve, reject) => {
    try {
      const {email} = user;
      const userKey = email?.trim()?.toLowerCase();
      const users = (await getItem(USERS_KEY)) || {};
      users[userKey] = user;

      await setItem(USERS_KEY, users);

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const getUser = email => {
  return new Promise(async (resolve, reject) => {
    try {
      const userKey = email?.trim()?.toLowerCase();
      const users = (await getItem(USERS_KEY)) || {};

      resolve(users[userKey]);
    } catch (error) {
      reject(error);
    }
  });
};
