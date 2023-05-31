import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './component/DateHead';
import AddTodo from './component/AddTodo';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <DateHead />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
