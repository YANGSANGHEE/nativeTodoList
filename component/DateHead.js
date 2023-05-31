import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const DateHead = () => {
  //현재 날짜
  let date = new Date();
  let nowDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDay(),
  };

  let {year, month, day} = nowDate;

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="salmon" barStyle="light-content" />
      <View style={styles.dateHeader}>
        <Text style={styles.HeaderTitle}>
          {year}년 {month}월 {day}일
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: 'salmon',
  },
  dateHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'salmon',
    position: 'relative',
    zIndex: 2,
  },
  HeaderTitle: {
    color: '#fff',
    fontSize: 20,
  },
});

export default DateHead;
