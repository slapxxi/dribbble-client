import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ShotScreen from './src/screens/ShotScreen';
import configureStore from './src/store/configureStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <RootNavigator />
    </Provider>
  );
}

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Shot: {
      screen: ShotScreen,
      navigationOptions: {
        gestureResponseDistance: {
          vertical: 290,
        },
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default App;
