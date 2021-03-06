import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CarouselImage from './CarouselImage';
import oneStar from '../assets/icons/1-star.png';
import twoStar from '../assets/icons/2-star.png';
import threeStar from '../assets/icons/3-star.png';
import fourStar from '../assets/icons/4-star.png';
import fiveStar from '../assets/icons/5-star.png';



export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let icon;
    if (this.props.rate === 1) {
      icon = oneStar;
    } else if (this.props.rate === 2) {
      icon = twoStar;
    } else if (this.props.rate === 3) {
      icon = threeStar;
    } else if (this.props.rate === 4) {
      icon = fourStar;
    } else {
      icon = fiveStar;
    }

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.titleHeader}>{this.props.title}</Text>

        </View>
        <View style={styles.cardImage}>
          <CarouselImage images={this.props.images} />
        </View>
        <View style={styles.content}>
          <Text style={styles.textDescription}>{this.props.description}</Text>
          <View style={styles.containerRate}>
            <Image source={icon} />
          </View>
          <Text style={styles.price}>{this.props.price}</Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Detail', { data: this.props })} >
            <Text style={styles.text}>See Detail!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    height: 430,
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
    backgroundColor: '#51adcf',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardImage: {
    flex: 1,
  },
  titleHeader: {
    marginVertical: 10,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardContent: {
    flex: 1,
  },
  textDescription: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 2,
    color: '#51adcf',
  },
  containerRate: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
  },
  rates: {
    width: 20,
    height: 20,
  },
  price: {
    textAlign: 'center',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ff9a76',
  },
  cardFooter: {
    marginTop: 5,
  },
  btn: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    backgroundColor: 'gold',
    padding: 10,

  },
});
