import React, { Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body,Button } from 'native-base';
export default class DetailProduct extends Component {
    componentDidMount() {
        console.log('iniside the detailProduct');
        console.log(this.props.navigation.state.params.data);

    }
    render() {
        const { brand, description, detail, id, images, price, rate, title } = this.props.navigation.state.params.data;
        return (
            <Container>
                <Header />
                <Content padder>
                    <Card>
                        <CardItem header bordered style={styles.card}>
                            <Text style={[styles.description, styles.title]}>{title}</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: images[2] }} style={styles.images} />
                        </CardItem>

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
                        <Button block info iconLeft style={styles.button}>
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
})