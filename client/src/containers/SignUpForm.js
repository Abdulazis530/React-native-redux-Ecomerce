import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Card, CardItem, Header, Body, Left, Right, Picker } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { signUp } from '../actions';
import { connect } from 'react-redux';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            retypepassword: '',
            showPassword: false,
            showRetypePassword: false,
            errorEmail: '',
            errorPassword: '',
            errorRetypePassword: '',

        };
    }
    handleChangeEmail = (value) => {
        console.log(this.props.navigation);
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
    handleChangeRetypePassword = (value) => {
        this.setState({
            errorRetypePassword: '',
        });
        this.setState({ retypepassword: value });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.emailValidation(this.state.email)) {
            this.setState({
                errorEmail: 'Email should contain valid domain and "@" symbol !'
            });
        }
        if (!this.state.email) {
            this.setState({
                errorEmail: 'Email cannot be empty',
            });
        }
        if (!this.passwordValidation(this.state.password)) {
            this.setState({
                errorPassword: '"must between 6 and 20 characters.contains one  numeric digit, one uppercase and one lowercase letter!"',
            });
        }
        if (!this.state.password) {
            this.setState({
                errorPassword: 'Password cannot be empty',
            });
        }
        if (!this.passwordValidation(this.state.retypepassword)) {
            this.setState({
                errorRetypePassword: '"must between 6 and 20 characters.contains one  numeric digit, one uppercase and one lowercase letter!"',
            });
        };
        if (!this.state.retypepassword) {
            this.setState({
                errorRetypePassword: 'Password cannot be empty',
            });
        }
        if (this.state.password !== this.state.retypepassword) {
            this.setState({
                errorPassword: 'Password does not match',
            });
            this.setState({
                errorRetypePassword: 'Password does not match',
            });
        }
        if (this.state.email &&
            this.state.password &&
            this.state.retypepassword &&
            this.emailValidation(this.state.email) &&
            this.passwordValidation(this.state.password) &&
            this.passwordValidation(this.state.retypepassword)
        ) {
            this.props.signUp(this.state.email, this.state.password, this.state.retypepassword, this.props.navigation);
        }


        console.log(this.state)
    }
    emailValidation = (email) => {
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }
    passwordValidation = (password) => {
        const passwFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (password.match(passwFormat)) {
            return true;
        } else {
            return false;
        }
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
                                {this.state.errorEmail ? <Text style={styles.error}>{this.state.errorEmail}</Text> : <Text></Text>}

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
                                {this.state.errorPassword ? <Text style={styles.error}>{this.state.errorPassword}</Text> : <Text></Text>}

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
                                {this.state.errorRetypePassword ? <Text style={styles.error}>{this.state.errorRetypePassword}</Text> : <Text></Text>}

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
    },
    error: {
        fontSize: 8,
        color: 'red',
    },
});

const mapDispatchToProps = (dispatch) => ({
    signUp: (email, password, retypepassword, navigation) => dispatch(signUp(email, password, retypepassword, navigation)),

});

export default connect(
    null,
    mapDispatchToProps
)(SignUp);