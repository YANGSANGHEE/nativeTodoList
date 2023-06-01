import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';

const Todoitem = ({id, text, state}) => {
  // 체크함수
  const setCheck = useCallback(async () => {
    await axios
      .get(`http://10.0.2.2:8084/todocheck/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  //삭제함수
  const setDel = useCallback(async () => {
    await axios
      .get(`http://10.0.2.2:8084/tododelete/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const setDelConfrim = () => {
    Alert.alert('삭제', '삭제하시겠습니까?', [
      {
        text: '삭제',
        onPress: () => {
          setDel();
        },
      },
      {
        text: '취소',
        onPress: () => {
          return null;
        },
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={setCheck}>
        <View style={styles.circle}>
          {state === 'Y' ? <Text style={{color: 'salmon'}}>✔️</Text> : null}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, state === 'Y' ? styles.lineset : null]}>
        {text}
      </Text>
      <TouchableOpacity onPress={() => setDelConfrim()}>
        {state === 'Y' ? <Text style={{fontSize: 18}}>🧹</Text> : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: 'salmon',
    borderWidth: 1,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineset: {
    opacity: 0.5,
    textDecorationLine: 'line-through',
  },
});

export default Todoitem;
