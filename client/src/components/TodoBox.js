import React, {Component} from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import TodoList from '../containers/TodoList'

export default class TodoBox extends Component {
    render() {
        return (
            <View style={styles.commentBox}>
                <Text style={styles.headerBox}>Daftar Chat</Text>
                <TodoList />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')}>
                    <Text>Tambah Chat</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentBox: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 20,
        margin: 4,
        borderColor: "grey",
        backgroundColor: "white"
    },
    headerBox: {
        fontSize: 20,
        color: "brown"
    },
});