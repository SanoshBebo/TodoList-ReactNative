import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = ({item}) => {
  return (
    <View style={styles.taskItem}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.taskName}>{item.fact}</Text>
        <Text style={styles.taskName}>{item.length}</Text>
      </View>
      <View style={styles.itemRightCircle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'lightblue',
    opacity: 0.7,
    marginRight: 15,
  },
  taskName: {
    maxWidth: '80%',
  },
  itemRightCircle: {
    width: 10,
    height: 10,
    borderColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
  },
});
export default Task;
