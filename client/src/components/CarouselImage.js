import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';


const { width } = Dimensions.get('window');
const height = 0.6 * width;


export default class CarouselImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,
            currentImage: 0,
        };
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.currentImage) {
            this.setState({ currentImage: slide });
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    style={styles.scroll}
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    centerContent={true}
                >

                    {this.state.images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={styles.image}
                        />
                    ))}
                </ScrollView>
                <View style={styles.pagingIndicator}>
                    {this.state.images.map((i, k) => (<Text key={k} style={k === this.state.currentImage ? styles.pagingActiveText : styles.pagingText}>
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
    container: { marginVertical: 25, width, height },
    scroll: { width, height },
    image: {
        width,
        height,
        resizeMode: 'contain',
        paddingRight: 50,
    },
    pagingText: {
        color: '#888',
        margin: 3,
    },
    pagingIndicator: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    pagingActiveText: {
        color: '#459DDE',
        margin: 3,
    },

});
