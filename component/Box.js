import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const Box = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Text>{count}</Text>
      <Button title="+1" onPress={increase} />
      <Button title="-1" onPress={decrease} />
    </>
  );
};

// const styleSet = StyleSheet.create({
//   box: {
//     backgroundColor: 'black',
//   },
//   rounded: {
//     borderRadius: 16,
//   },
//   small: {
//     width: 32,
//     height: 32,
//   },
//   medium: {
//     width: 64,
//     height: 64,
//   },
//   large: {
//     width: 128,
//     height: 128,
//   },
// });

export default Box;
