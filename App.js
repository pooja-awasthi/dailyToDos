import React, {useState} from 'react';
import {View} from 'react-native';
import TaskInput from './src/Components/taskInput';
import TaskView from './src/Components/taskView';
import {Keyboard, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import styles from './style';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task == null) {
      return;
    }
    const tasksTempArray = [...tasks];
    tasksTempArray.push({
      task: task,
      isCompleted: false,
    });
    setTasks(tasksTempArray);
    Keyboard.dismiss();
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  const doneTask = doneIndex => {
    const CompletedTask = tasks.findIndex(
      (value, index) => index === doneIndex,
    );
    const tasksTempArray = [...tasks];
    tasksTempArray[CompletedTask].isCompleted = true;
    setTasks(tasksTempArray);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header
        style={styles.appBar}
        statusBarHeight={Platform.OS === 'ios' ? 15 : StatusBar.currentHeight}>
        <Appbar.Content title="TODO LIST" subtitle="" />
      </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <View key={`${index}_taskList`} style={styles.taskContainer}>
              <TaskView
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
                doneTask={() => doneTask(index)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TaskInput addTask={addTask} />
    </View>
  );
}
