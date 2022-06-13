import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from './Styles/taskViewStyle';

export default TaskView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.task}>{props.task.task}</Text>
        {!props.task.isCompleted && (
          <TouchableOpacity onPress={props.doneTask.bind(this)}>
            <AntIcon name="checkcircle" color="white" size={20} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={props.deleteTask.bind(this)}>
          <View style={styles.button}>
            <AntIcon name="delete" color="#9a4a70" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
