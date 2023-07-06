import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppProvider from './src/navigation/AppProvider';
import AppLayout from './src/navigation/AppLayout';
import {
  requestUserPermission,
  useNotifee,
} from './src/utils/notificationService';

const App = () => {
  useNotifee();
  useEffect(() => {
    requestUserPermission();
  }, []);

  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
