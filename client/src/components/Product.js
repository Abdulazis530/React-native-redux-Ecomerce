import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import oneStars from '../assets/icons/1-stars.png';



export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const looper = new Array(this.props.rate);
    console.log(looper)
    const rating = looper.map(e=>{
      return <Image source={oneStars} style={styles.rates} />
    })
   
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.titleHeader}>{this.props.title}</Text>

        </View>
        <View style={styles.cardBody}>
          <Image source={{ uri: this.props.images[0] }} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.textDescription}>{this.props.description}</Text>
          <View style={styles.containerRate}>
            {rating}
          </View>
          <Text style={styles.price}>{this.props.price}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    height: 300,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 10,

  },
  cardHeader: {
    backgroundColor: '#459DDE',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 2,
  },
  titleHeader: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'white',
  },
  cardFooter: {
    flex: 1,
  },
  textDescription: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  containerRate: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rates: {
    width: 20,
    height: 20,
  },
  price: {
    textAlign: 'center',
  }


});
