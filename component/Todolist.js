import React, {memo} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Todoitem from './Todoitem';

const Todolist = ({todo}) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      style={styles.list}
      data={todo}
      /* data 에 props를 설정 시 renderItem이라는 
      함수를 통해 data 배열안에 있는 데이터를 가리키는 뷰를 만들 수 있음 */
      renderItem={({item}) => (
        <Todoitem id={item.id} text={item.con} state={item.state} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderEndWidth: 0.5,
    borderTopWidth: 0,
    borderBottomColor: '#9e9e9e',
    height: 1,
  },
});
export default memo(Todolist);
