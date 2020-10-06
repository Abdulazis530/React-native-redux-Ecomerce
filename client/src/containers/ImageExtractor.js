import React from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import { Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { cancelAddImage, addImage } from '../actions';
import { connect } from 'react-redux';

class ImageExtractor extends React.Component {

    constructor(props) {
        super(props);
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.props.addImage(response);
            }
        });
    }
    handleDelete = (image) => {
        console.log('THIS IS ITEM:', image);
        // THIS IS ITEM: {fileName: "image-1ce34eea-c798-44e2-ad1e-e0d2dd84d757.jpg", fileSize: 129327, width: 444, originalRotation: 0, uri: "file:///storage/emulated/0/Pictures/image-1ce34eea-c798-44e2-ad1e-e0d2dd84d757.jpg", …}
        this.props.cancelAddImage(image);
    }

    render() {

        return (
            <View >
                <View style={[styles.containerAddImage, { marginBottom: 20 }]} >
                    <Button block iconLeft style={styles.buttonAddImages} onPress={this.selectPhotoTapped.bind(this)}>
                        <MaterialCommunityIcons name="image-plus" size={30} color="white" />
                        <Text style={styles.textIcon}>ADD IMAGES</Text>
                    </Button>
                </View>
                <View style={styles.container}>
                    {this.props.productImages.length > 0 ? this.props.productImages.map((image, index) => (
                        <View key={index}>
                            <TouchableOpacity style={styles.cancel} onPress={() => this.handleDelete(image)}>
                                <FontAwesome name={'remove'} color="red" size={30} />
                            </TouchableOpacity>
                            <Image style={[styles.avatar, styles.imageStyle]} source={{ uri: image.uri }} />

                        </View>
                    ))
                        : <View style={[styles.avatar, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Put Your Image Here</Text>
                        </View>

                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: 'rgb(255,140,0)',
        backgroundColor: 'rgba(255, 215, 0, 0.5)',

    },
    textIcon: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    },
    containerAddImage: {
        flex: 1,
        width: '100%',

    },
    avatarContainer: {
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,215,0,0.4)',
        marginVertical: 5,
    },
    avatar: {
        width: 150,
        height: 150,
    },
    imageStyle: {
        borderColor: 'white',
        borderWidth: 2,
        resizeMode: 'cover',
        marginHorizontal: 10,
        marginVertical: 10
    },
    cancel: {
        position: 'absolute',
        top: -5,
        right: 0,
        zIndex: 10
    },
    buttonAddImages: {
        backgroundColor: '#51adcf',
    },
});

const mapStateToProps = (state) => ({
    productImages: state.images.productImages,
})
const mapDispatchToProps = (dispatch) => ({
    addImage: (response) => dispatch(addImage(response)),
    cancelAddImage: (image) => dispatch(cancelAddImage(image)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageExtractor)