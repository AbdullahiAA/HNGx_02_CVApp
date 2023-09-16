import React from 'react';
import HomeScreen from './screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditScreen from './screens/EditScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: {data: Info} | undefined;
  Edit: {data: Info};
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Who am I'}}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{title: 'Edit Information'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
