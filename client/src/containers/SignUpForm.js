import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Card, CardItem, Header, Body, Left, Right, Picker } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            retypePassword: '',
            showPassword: false,
            showRetypePassword: false,
        };
    }
    handleChangeEmail = (value) => {
        this.setState({ email: value });
    }

    handleChangePassword = (value) => {
        this.setState({ password: value });
    }
    handleChangeRetypePassword = (value) => {
        this.setState({ retypePassword: value });
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state)
    }
    toggleEyePass = () => {
        console.log('clicked')
        this.setState(state => ({
            showPassword: !state.showPassword,
        }));
    }
    toggleEyeRePass = () => {
        console.log('clicked')
        this.setState(state => ({
            showRetypePassword: !state.showRetypePassword,
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
                        <Text style={styles.headerText}>Sign Up</Text>
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
                                </View>

                                <View style={styles.containerInput}>
                                    <TextInput style={styles.textInput}
                                        placeholder="Password"
                                        onChangeText={this.handleChangePassword}
                                        secureTextEntry={this.state.showPassword ? false : true}
                                    />
                                    <Text style={styles.label}>Password</Text>
                                    <TouchableOpacity activeOpacity={1} style={styles.iconEye} onPress={this.toggleEyePass}>
                                        <FontAwesome5 name={this.state.showPassword ? "eye-slash" : "eye"} size={20} color="black" />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.containerInput}>
                                    <TextInput style={styles.textInput}
                                        placeholder="Password Confirmation"
                                        onChangeText={this.handleChangeRetypePassword}
                                        secureTextEntry={this.state.showRetypePassword ? false : true}
                                    />
                                    <Text style={styles.label}>Password Confirmation</Text>
                                    <TouchableOpacity activeOpacity={1} style={styles.iconEye} onPress={this.toggleEyeRePass}>
                                        <FontAwesome5 name={this.state.showRetypePassword ? "eye-slash" : "eye"} size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button block iconLeft style={styles.buttonSubmit} onPress={this.handleSubmit}>
                                <MaterialCommunityIcons name="account-plus" size={30} color="white" />
                                <Text style={styles.textIcon}>Sign Up</Text>
                            </Button>
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
    }
});
