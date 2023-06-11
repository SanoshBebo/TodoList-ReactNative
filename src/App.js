import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoList from './screens/TodoList';
import TodoDetails from './screens/TodoDetails';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="TodoDetails" component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
