import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import TaskInput from './src/Components/TaskInput';
import TaskView from './src/Components/TaskView';
import {
  Text,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Appbar } from 'react-native-paper';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    const newValue = {
      task: task,
      isCompleted: false,
    };''
    const tempArray = [...tasks]
    tempArray.push({
      task: task,
      isCompleted: false,
    });
    setTasks(tempArray);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  const doneTask = (doneIndex) => {
    const CompletedObject = tasks.findIndex((value, index) => index === doneIndex);
    const tempArray = [...tasks];
    tempArray[CompletedObject].isCompleted = true;
    setTasks(tempArray);
  }

  return (
    <View style={styles.container}>
        <Appbar.Header
          style={styles.appBar}
          statusBarHeight={Platform.OS === "ios" ? 15 : StatusBar.currentHeight}
        >
          <Appbar.Content title="TODO LIST" subtitle="" />
        </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
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
        })
      }
      </ScrollView>
      <TaskInput addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c59cc2',
  },
  appBar: {
    backgroundColor: '#9a4a70',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});