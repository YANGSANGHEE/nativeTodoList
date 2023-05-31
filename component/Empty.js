import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Empty = () => {
  return <View></View>;
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fonSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
