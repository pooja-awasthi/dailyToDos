import React  from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
    ScrollView,
} from 'react-native';
// import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';
import { useNavigationContainerRef } from '@react-navigation/native';

AppBar = (props) => {
    const _goBack = () => console.log('Went back');
    let BackIcon = null;
    if (props.addNewText) {
      BackIcon = <Appbar.BackAction onPress={() => navigationRef.goBack()} />
    }
    return (
    <Appbar.Header>
      {BackIcon}
      <Appbar.Content title={props.title} subtitle="" />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
    </Appbar.Header>
    );
}

const styles = StyleSheet.create({
});

export default AppBar;