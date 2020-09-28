import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button, Container, Content, Card, CardItem, Header, Body, Left, Right, Picker } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



export default class AddForm extends Component {
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
                        <Text style={styles.headerText}>Add New Product</Text>
                    </Body>
                    <Right style={{ flex: 1 }} />
                </Header>
                <Content padder style={{ marginTop: 20 }}>
                    <Card >
                        <CardItem bordered >
                            <View style={styles.body}>
                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Title</Text>
                                    <TextInput style={styles.textInput}
                                        placeholder="Title"
                                    />
                                </View>
                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Description</Text>
                                    <TextInput style={[styles.textInput, { height: 100, textAlignVertical: "top" }]}
                                        placeholder="Description"
                                        multiline={true}
                                    />
                                </View>
                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Rate</Text>
                                    <TextInput style={styles.textInput}
                                        placeholder="Rate"
                                        keyboardType="numeric"
                                    />
                                </View>

                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Price</Text>
                                    <TextInput style={styles.textInput}
                                        placeholder="Price"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Brand</Text>
                                    <TextInput style={styles.textInput}
                                        placeholder="Brand"
                                    />
                                </View>

                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Detail</Text>
                                    <TextInput style={[styles.textInput, { height: 100, textAlignVertical: "top" }]}
                                        placeholder="Detail"
                                        multiline={true}
                                    />
                                </View>
                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Image</Text>
                                </View>
                                <View style={styles.containerAddImage}>
                                    <Button block iconLeft style={styles.buttonAddImages}>
                                        <MaterialCommunityIcons name="image-plus" size={30} color="white" />
                                        <Text style={styles.textIcon}>ADD IMAGES</Text>
                                    </Button>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button block iconLeft style={styles.buttonSubmit}>
                                <SimpleLineIcons name="check" size={30} color="white" />
                                <Text style={styles.textIcon}>SUBMIT</Text>
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
    buttonAddImages: {
        width: '100%',
        backgroundColor: '#51adcf',
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
    containerAddImage: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 30,
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
});
