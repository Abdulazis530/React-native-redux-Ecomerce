import React from 'react'
import {TextInput, Button, View} from 'react-native';
import { postChat } from '../actions'
import { connect } from 'react-redux'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', message: '' };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(value) {
        this.setState({ name: value });
    }

    handleChangeMessage(value) {
        this.setState({ message: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addChat(this.state.name, this.state.message);
        this.setState({ name: '', message: '' })
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={{ padding: 10, flex: 1 }}>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <TextInput style={{ height: 40 }} placeholder="Masukkan nama" onChangeText={this.handleChangeName} />
                <TextInput style={{ height: 80 }} placeholder="Masukkan pesannya" onChangeText={this.handleChangeMessage} />
                <Button onPress={this.handleSubmit} title="Kirim" />
            </View>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    addChat: (name, message) => dispatch(postChat(name, message))
})

export default connect(
    null,
    mapDispatchToProps
)(TodoForm)