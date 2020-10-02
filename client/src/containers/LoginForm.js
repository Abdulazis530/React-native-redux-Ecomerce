import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Card, CardItem, Header, Body, Left, Right, Picker } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { logIn } from '../actions';
import { connect } from 'react-redux';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            errorEmail: '',
            errorPassword: '',

        };
    }
    handleChangeEmail = (value) => {
        this.setState({
            errorEmail: '',
        });
        this.setState({ email: value });
    }

    handleChangePassword = (value) => {
        this.setState({
            errorPassword: '',
        });
        this.setState({ password: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.email) {
            this.setState({
                errorEmail: 'Email cannot be empty',
            });
        }
        if (!this.state.password) {
            this.setState({
                errorPassword: 'Password cannot be empty',
            });
        }

        if (this.state.email && this.state.password) {
            this.props.logIn(this.state.email, this.state.password, this.props.navigation);

        }
    }
    toggleEye = () => {
        this.setState(state => ({
            showPassword: !state.showPassword,
        }));
    }
    render() {
        return (

            <Container style={styles.container}>

                <Header style={styles.headerColor}>

                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                            <MaterialCommunityIcons name="arrow-left-thick" size={30} color="white" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2, alignItems: 'center' }} >
                        <Text style={styles.headerText}>Log In</Text>
                    </Body>
                    <Right style={{ flex: 1 }} />
                </Header>
                <Content padder style={{ marginTop: 20 }}>
                    <Card >
                        <CardItem bordered >
                            <View style={styles.body}>
                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Email</Text>
                                    <TextInput style={styles.textInput}
                                        placeholder="Email"
                                        onChangeText={this.handleChangeEmail}
                                    />
                                    {this.state.errorEmail ? <Text style={styles.error}>{this.state.errorEmail}</Text> : <Text></Text>}
                                </View>

                                <View style={styles.containerInput}>
                                    <TextInput style={styles.textInput}
                                        placeholder="Password"
                                        onChangeText={this.handleChangePassword}
                                        secureTextEntry={this.state.showPassword ? false : true}
                                    />
                                    <Text style={styles.label}>Password</Text>
                                    {this.state.errorPassword ? <Text style={styles.error}>{this.state.errorPassword}</Text> : <Text></Text>}


                                    <TouchableOpacity activeOpacity={1} style={styles.iconEye} onPress={this.toggleEye}>
                                        <FontAwesome5 name={this.state.showPassword ? "eye-slash" : "eye"} size={20} color="black" />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </CardItem>
                        <CardItem footer bordered>

                            <View style={styles.containerButton}>
                                <Button block iconLeft style={styles.buttonSubmit} onPress={this.handleSubmit}>
                                    <AntDesign name="login" size={30} color="white" />
                                    <Text style={styles.textIcon}>Log In</Text>
                                </Button>
                                <Button block iconLeft style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <FontAwesome5 name="user-plus" size={20} color="white" />
                                    <Text style={styles.textIcon}>Create New Account</Text>
                                </Button>

                            </View>

                        </CardItem>
                    </Card>

                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a2d5f2',
    },
    headerColor: {
        backgroundColor: '#51adcf',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
        marginLeft: 10,
    },
    buttonSubmit: {
        width: '100%',
        backgroundColor: '#f08a5d',
    },

    body: {
        flex: 1,
        paddingBottom: 10,
    },
    containerInput: {
        flexDirection: 'row',
        flex: 1,
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        borderColor: '#CCCCCC',
        borderWidth: 1,
        height: 40,
        width: '100%',
        paddingLeft: 15,
        borderRadius: 10,
        marginTop: 30,
        fontSize: 18,
        flex: 1,
    },
    label: {
        position: 'absolute',
        top: 5,
        left: 0,
        fontSize: 18,
    },
    textIcon: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    },
    iconEye: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    error: {
        position: 'absolute',
        top: 10,
        left: 80,
        fontSize: 12,
        color: 'red',
    },
});

const mapDispatchToProps = (dispatch) => ({
    logIn: (email, password, navigation) => dispatch(logIn(email, password, navigation)),

});

export default connect(
    null,
    mapDispatchToProps
)(LoginForm);