import React , { Component, useState, useEffect } from 'react';
import AppBar from './AppBar';
import TaskView from './taskView';
import TaskInput from './taskInput';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

Home = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [taskPage, setTaskPage] = useState(false);
    const addTaskHandler = (task, time) => {
      console.log("inside add task handler1: ",task)
      console.log("inside add task handler2: ",time)
    setTaskList([...taskList, {task: task, time: time}]);
    setTaskPage(true);
  }

  const Stack = createNativeStackNavigator();

  const handleAddedTask = () => {
    Keyboard.dismiss();
    // props.addTaskHandler(task);
    setTaskPage(true);
  }

  let addTaskView = null;
  let taskListView = null;
    if(taskPage) {
      addTaskView = (
        <View>
        <AppBar addNewText={true} title='Add Task' />
          <TaskInput style={styles.addButton} addTaskHandler={addTaskHandler} />
        </View>
        );
    } else {
      taskListView = (
      <View>
        <AppBar addNewText={false} title='Task List' />
        {
            taskList.map((value) => (
              <View style={styles.taskAndTime}> 
                <TaskView text={value.task} />
                <TaskView text={value.time} />
              </View>
            ))
        }
            <TouchableOpacity onPress={handleAddedTask}>
                <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
      </View>
      );
    }
  
    console.log("addTaskView: ",addTaskView)
    console.log("taskListView: ",taskListView)
    return (
      <View>
        <NavigationContainer>
          <Stack.Navigator  initialRouteName="TaskList">
            <Stack.Screen
              name="AddTask"
              component={() => <View>{addTaskView}</View>}
            >
              {/* {props => addTaskView} */}
            </Stack.Screen>
            <Stack.Screen
              name="TaskList"
              component={() => <View>{taskListView}</View>}
            >
              {/* {props => taskListView} */}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      );
}

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'flex-end',
    bottom: 0,
    position: 'relative',
  },
  taskAndTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  addText: {

  },
  addWrapper: {
      width: 50,
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      alignSelf: 'flex-end',
      margin: 10,
  },
});

export default Home;