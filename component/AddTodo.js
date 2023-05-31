import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

const AddTodo = () => {
  const [text, setText] = useState('');

  console.log(text);

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="할일을 입력하세요"
      />
      <View style={styles.btn}>
        <Text style={{fontSize: 20, color: '#fff'}}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    borderColor: '#bdbdbd',
    height: 64,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    height: 38,
    backgroundColor: 'salmon',
    borderRadius: 24,
  },
});

export default AddTodo;
