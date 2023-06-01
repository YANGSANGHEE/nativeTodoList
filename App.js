import React, {useState, useEffect, memo} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import axios from 'axios';
import DateHead from './component/DateHead';
import AddTodo from './component/AddTodo';
import Empty from './component/Empty';
import Todolist from './component/Todolist';

const App = () => {
  const [todo, setTodo] = useState([]);

  //데이터 세팅
  const TodoData = async () => {
    await axios
      .get('http://10.0.2.2:8084/todoread')
      .then(data => {
        setTodo(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    TodoData();
  }, [todo]);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.avoid}>
          {/* behavior={plaform.select({ios:'padding'})} */}
          <DateHead />
          {todo && todo.length === 0 ? <Empty /> : <Todolist todo={todo} />}
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export default memo(App);
