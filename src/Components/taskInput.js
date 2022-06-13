import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './Styles/taskInputStyle';

export default TaskInput = (props) => {
  const [task, setTask] = useState();

  const handleAddTask = value => {
    props.addTask(value);
    setTask(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={task}
        onChangeText={text => setTask(text)}
        placeholder={'Write a task'}
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity onPress={() => handleAddTask(task)}>
        <View style={styles.button}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};