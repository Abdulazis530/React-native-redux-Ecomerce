import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button, Container, Content, Card, CardItem, Header, Body, Left, Right, Picker } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ImageExtractor from '../containers/ImageExtractor';
import { addProduct } from '../actions'
import { connect } from 'react-redux'
import { getData } from '../helpers/asyncStorageHelper'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            brand: '',
            detail: '',
            description: '',
            rate: '1',

        };
    }
    handleChangeTitle = (value) => {
        this.setState({ title: value });
    }
    handleChangeDesc = (value) => {
        this.setState({ description: value });
    }
    handleChangePrice = (value) => {
        this.setState({ price: Number(value) });
    }
    handleChangeBrand = (value) => {
        this.setState({ brand: value });
    }
    handleChangeDetail = (value) => {
        this.setState({ detail: value });
    }
    handleChangeRate = (value) => {
        this.setState({
            rate: value,
        });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const token = await getData();
        const newProduct = {
            ...this.state,
            images: this.props.productImages
        }
        console.log('HANDEL SUBMIT ADD FORM:', newProduct)
        this.props.addProduct(newProduct, token, this.props.navigation)
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
                                        onChangeText={this.handleChangeTitle}
                                    />
                                </View>

                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Price</Text>
                                    <TextInput style={styles.textInput}
                                        placeholder="Price"
                                        keyboardType="numeric"
                                        onChangeText={this.handleChangePrice}
                                    />
                                </View>

                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Brand</Text>
                                    <TextInput style={styles.textInput}
                                        placeholder="Brand"
                                        onChangeText={this.handleChangeBrand}
                                    />
                                </View>

                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Detail</Text>
                                    <TextInput style={[styles.textInput, { height: 100, textAlignVertical: "top" }]}
                                        placeholder="Detail"
                                        onChangeText={this.handleChangeDetail}
                                        multiline={true}
                                    />
                                </View>

                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Description</Text>
                                    <TextInput style={[styles.textInput, { height: 100, textAlignVertical: "top" }]}
                                        placeholder="Description"
                                        multiline={true}
                                        onChangeText={this.handleChangeDesc}
                                    />
                                </View>

                                <View style={styles.containerInput}>
                                    <Text style={styles.label}>Rate</Text>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.textInput}
                                        selectedValue={this.state.rate}
                                        onValueChange={this.handleChangeRate}
                                    >
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                    </Picker>

                                </View>
                                <ImageExtractor />

                            </View>
                        </CardItem>
                        <CardItem footer bordered>

                            <Button block iconLeft style={styles.buttonSubmit} onPress={this.handleSubmit}>
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
});

const mapStateToProps = (state) => ({
    productImages: state.images.productImages,
});

const mapDispatchToProps = (dispatch) => ({
    addProduct: (newProduct, token, navigation) => dispatch(addProduct(newProduct, token, navigation))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps)(AddForm)
