import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './RootStackParams';
import EventsUser from '../screens/EventsUser';
import Login from '../screens/Login';
import Event from '../screens/Event';
import RegisterEvent from '../screens/RegisterEvent';
import EventsAdmin from '../screens/EventsAdmin';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EventsUser"
          component={EventsUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Event"
          component={Event}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterEvent"
          component={RegisterEvent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EventsAdmin"
          component={EventsAdmin}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
