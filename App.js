import {Provider as PaperProvider} from 'react-native-paper';
import React from 'react';

import AppNavigator from './src/navigation/AppNavigation';
// import theme from './src/style/theme';

function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

export default App;
