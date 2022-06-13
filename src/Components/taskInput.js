import React, {useState} from 'react';
import {KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import styles from './Styles/taskInputStyle';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default TaskInput = props => {
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
      <TouchableOpacity onPress={handleAddTask.bind(this, task)}>
        <AntIcon name="upcircle" color="white" size={30} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
