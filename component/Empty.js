import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        source={{
          uri: 'https://shimgserver.s3.ap-northeast-2.amazonaws.com/167a4b8bd7ac32b16c1e05ef5e4147fe.png',
        }}
        style={{width: 300, height: 300}}
        resizeMode="contain"
      />
      <Text style={styles.description}>여유있는 날~</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 20,
    color: '#9e9e9e',
  },
});

export default Empty;
