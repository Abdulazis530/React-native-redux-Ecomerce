import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import CarouselImage from './CarouselImageFix.js';
import { Container, Header, Content, Card, CardItem, Body, Button, Left, Right } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class DetailProduct extends Component {
    componentDidMount() {
        console.log('iniside the detailProduct');
        console.log(this.props.navigation.state.params.data);

    }
    render() {
        const { brand, description, detail, images, price, rate, title } = this.props.navigation.state.params.data;
        return (
            <Container>
                <Header style={styles.headerColor}>
                    <Left style={{ flex: 1 }} />
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.headerText}>{title}</Text>
                    </Body>
                    <Right style={{ flex: 1 }} />
                </Header>
                <CarouselImage images={images} />

                <Content padder>
                    <Card>
                        <CardItem bordered>
                            <Body>
                                <Text style={styles.description}>Rate:</Text>
                                <Text>
                                    {rate}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={styles.description}>Brand:</Text>
                                <Text>
                                    {brand}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={styles.description}>Description:</Text>
                                <Text>
                                    {description}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={styles.description}>Price:</Text>
                                <Text>
                                    {price}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={styles.description}>Detail:</Text>
                                <Text>
                                    {detail}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered >
                            <Button block info iconLeft style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
                                <MaterialCommunityIcons name="arrow-left-thick" size={30} color="white" />
                                <Text style={styles.textIcon}>BACK</Text>
                            </Button>
                        </CardItem>
                    </Card>

                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
    },
    images: {
        height: 400,
        width: null,
        flex: 1,
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
    },
    title: {
        color: 'black',
        fontSize: 20,
    },
    headerColor: {
        backgroundColor: '#459DDE',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,

    },
    textIcon: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    },
});
