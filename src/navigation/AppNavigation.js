import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useContext} from 'react';

import AppContext from '../components/contexts/AppContext';

// Screens Imports
import HomeScreen from '../components/screens/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen';
import SlotAllocationScreen from '../components/screens/SlotAllocationScreen';

const AppStack = createStackNavigator();

const AppScreens = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomeScreen} />
    <AppStack.Screen name="Slot" component={SlotAllocationScreen} />
  </AppStack.Navigator>
);

const AuthStack = createStackNavigator();

const AuthScreens = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

function AppNavigator() {
  const {user: {email} = {}} = useContext(AppContext);
  if (email) {
    return <AppScreens />;
  }
  return <AuthScreens />;
}

function AppContainer() {
  const [user, setUser] = useState();
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default AppContainer;
