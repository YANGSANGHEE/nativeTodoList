import React, {useState, useCallback} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

const AddTodo = () => {
  const [text, setText] = useState('');
  const writeData = useCallback(async () => {
    await axios
      .post('http://10.0.2.2:8084/todowrite', {con: text})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [text]);

  const btn = (
    <View style={styles.btn}>
      <Text style={{fontSize: 20, color: '#fff'}}>+</Text>
    </View>
  );

  const onPress = () => {
    setText(text);
    writeData();
    setText('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
        placeholder="할일을 입력하세요"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {btn}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {btn}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
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
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
