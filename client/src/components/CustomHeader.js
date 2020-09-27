import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import hamburger from '../assets/icons/hamburger.png';
import bell from '../assets/icons/bell.png';
import search from '../assets/icons/search.png';
export default function CustomHeader() {
    return (

        <View >
            <View style={styles.header}>
                <Image style={styles.iconHamburger} source={hamburger} />
                <View>
                    <Text style={styles.headerText}>Toko Hape.</Text>
                </View>
                <Image style={styles.iconBell} source={bell} />
                <TextInput />
            </View>
            <View style={styles.searchBar}>
                <View style={styles.searchIcon}>
                    <Image source={search} />
                </View>
                <TextInput style={styles.searchText} placeholder="Search new item" underlineColorAndroid="transparent" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#459DDE',
        paddingVertical: 30,
    },
    iconHamburger: {
        marginLeft: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
        marginLeft: 10,
    },
    iconBell: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#459DDE',
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: 60,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,

    },
    searchIcon: {
        position: 'absolute',
        left: 30,
        top: 10,
        zIndex: 1,
    },
    searchText: {
        height: 40,
        width: '90%',
        borderColor: '#459DDE',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 40,
    },
});
