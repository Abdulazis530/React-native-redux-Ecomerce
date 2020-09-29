import React from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: [{ uri: null }],
        };
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
                this.setState(state => ({
                    avatarSource: [response, ...state.avatarSource],
                }));
                console.log(this.state);
            }
        });
    }
    handleTest = (item) => {
        console.log('THIS IS ITEM:', item);
        // THIS IS ITEM: {fileName: "image-1ce34eea-c798-44e2-ad1e-e0d2dd84d757.jpg", fileSize: 129327, width: 444, originalRotation: 0, uri: "file:///storage/emulated/0/Pictures/image-1ce34eea-c798-44e2-ad1e-e0d2dd84d757.jpg", …}
        this.setState(state => ({
            avatarSource: [...state.avatarSource.filter(stateItem => stateItem.uri !== item.uri)],
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.wraper}
                    horizontal={true}
                    data={this.state.avatarSource}
                    renderItem={({ item }) =>
                        <View>

                            <View
                                style={[styles.avatar, styles.avatarContainer]}>
                                {item.uri === null ? (
                                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                        <MaterialIcons name={'add-a-photo'} color="white" size={50} />
                                    </TouchableOpacity>
                                ) : (
                                        <View>
                                            <TouchableOpacity style={styles.cancel} onPress={() => this.handleTest(item)} value={item}>
                                                <FontAwesome name={'remove'} color="red" size={30} />
                                            </TouchableOpacity>
                                            <Image style={[styles.avatar, styles.imageStyle]} source={{ uri: item.uri }} />
                                        </View>
                                    )}
                            </View>


                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // wraper: {
    //     marginHorizontal: 1,
    // },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: 'rgb(255,140,0)',
        position: 'absolute',
        top: 100,
        marginHorizontal: 5,


    },
    avatarContainer: {
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,215,0,0.5)',
        marginVertical: 10,
        marginHorizontal: 5,

    },
    avatar: {
        width: 150,
        height: 150,
    },
    imageStyle: {
        borderColor: 'white',
        borderWidth: 2,
        resizeMode: 'cover',
    },
    cancel: {
        position: 'absolute',
        top: -10,
        right: -10,
        zIndex: 10
    }
});
