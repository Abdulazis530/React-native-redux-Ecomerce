import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';



export default function Product(props) {

  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{props.title}</Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: props.image[0] }} style={styles.imageCard} />
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.textDescription}> {props.description}</Text>
              <Text style={styles.rate}> {props.rate}</Text>
              <Text style={styles.price}> {props.price}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    height: 200,
    width: null,
    flex: 1,
  },
  textDescription: {
    color: '#121212',
    height: 27,
    width: 120,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 1,
    marginLeft: 12,
  },
  price: {
    color: '#121212',
    height: 20,
    width: 84,
    fontSize: 10,
    marginLeft: 30,
  },
});
