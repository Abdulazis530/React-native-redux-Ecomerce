import React, { Component } from 'react';
import TodoItem from './Chat'
import { loadChat } from '../actions'
import { connect } from 'react-redux'
import { FlatList, StyleSheet, View } from 'react-native'

class TodoList extends Component {

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => <TodoItem
                        key={item.id}
                        name={item.name}
                        message={item.message}
                        sent={item.sent}
                        id={item.id} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    }
})


const mapStateToProps = (state) => ({
    data: state.chats
})

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadChat())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)