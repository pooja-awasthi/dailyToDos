import React , { Component, useState } from 'react';
import {
    KeyboardAvoidingView,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
    ScrollView,
    Button,
} from 'react-native';
import PropTypes from 'prop-types';
import RNDateTimePicker from '@react-native-community/datetimepicker';

TaskInput = (props) => {
    console.log("inside task input box")

    const [task, setTask] = useState(null);
    const [time, setTime] = useState(new Date());

    return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
            <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.content}>
                <View>
                    <TextInput
                        editable
                        style={styles.input}
                        placeholder='Write a task'
                        value={task}
                        onChangeText={(text) => {
                            setTask(text)
                        }}
                    >
                    </TextInput>
            <View style={styles.dateTime}>
                <RNDateTimePicker mode="datetime" display="default" value={time} onChange={(event,date) => setTime(date)} />
            </View>
            </View>
            <View style={styles.fixToText}>
                <Button
                title="save"
                onPress={() => props.addTaskHandler(task,time)}
                />
            </View>
            </ScrollView>
                </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    writeeTaskWrapper: {
        flex: 1,
        topPadding: 40,
        marginTop: 150,
        // position: 'absolute',
        bottom: 5,
        right: 2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    dateTime: {
        margin: 15,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 15,
    },
    content: {
        overflow: 'scroll',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 220,
        marginTop: 40
    }
})

export default TaskInput;
