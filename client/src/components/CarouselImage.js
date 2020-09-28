import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get("window");
const height = 0.6 * width;


export default class CarouselImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { image: 'http://192.168.1.12:3001/images/1601027840856androidstudio.jpeg', id: 1 },

                { image: 'http://192.168.1.12:3001/images/1601027840856indomi.jpeg', id: 2 },
                { image: 'http://192.168.1.12:3001/images/1601027840856iphones.jpg', id: 3 }
            ],
            currentImage: 0,
        };
    }

    change = ({ nativeEvent }) => {
        console.log('scroool yuhu')
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        console.log(slide)
        if (slide !== this.state.currentImage) {
            this.setState({ currentImage: slide });
        }
    }
    render() {

        return (
            <View style={{ marginTop: 50, width, height }}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    style={{ width, height }}
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                >

                    {this.state.images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image.image }}
                            style={styles.image}
                        />
                    ))}
                </ScrollView>
                <View style={styles.pagingIndicator}>
                    {this.state.images.map((i, k) => (<Text key={k} style={k == this.state.currentImage ? styles.pagingActiveText : styles.pagingText}>
                        ⬤
                    </Text>
                    ))
                    }
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    image: {
        width,
        height,
        resizeMode: 'cover',
    },
    pagingText: {
        color: '#888',
        margin: 3,
    },
    pagingIndicator: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    pagingActiveText: {
        color: '#fff',
        margin: 3,
    },

});
