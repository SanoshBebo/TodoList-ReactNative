import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Task from '../components/Task';
import apiTest from '../api/Testing';
import Button from '../components/Button';

const TodoList = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [res, setRes] = useState();

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const handleUpdate = async () => {
    const data = await apiTest();
    setTaskItems([...taskItems, data]);
  };

  const completeTask = index => {
    let taskCopy = [...taskItems];
    taskCopy.splice(index, 1);
    setTaskItems(taskCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        {/* title of the app */}
        <Text style={styles.tasksTitle}>Today's tasks</Text>
        {/* task container */}
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task item={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.addTaskInput}
          placeholder="write a task"
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity
          onPress={() => {
            handleAddTask();
          }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addBtn}>+</Text>
          </View>
        </TouchableOpacity>
        <Button title="testing" onPress={handleUpdate} />
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  tasksTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginVertical: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  addTaskInput: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {},
});
export default TodoList;
