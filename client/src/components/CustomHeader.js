import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function CustomHeader() {
    return (

        <View >
            <View style={styles.header}>
                <MaterialIcons style={styles.iconHamburger} name="menu" size={30} color="white" />
                <View>
                    <Text style={styles.headerText}>TokoHape.</Text>
                </View>
                <FontAwesome style={styles.iconBell} name="bell" size={20} color="white" />
                <TextInput />
            </View>
            <View style={styles.searchBar}>
                <View style={styles.searchIcon}>
                    <FontAwesome name="search" size={20} color="gold" />
                </View>
                <TextInput style={styles.searchText} placeholder="Search Product" underlineColorAndroid="transparent" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#51adcf',
        paddingVertical: 30,
    },
    iconHamburger: {
        marginLeft: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        letterSpacing: 1,
        marginLeft: 100,
    },
    iconBell: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#51adcf',
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: 60,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,

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
        borderColor: '#51adcf',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 40,
    },
});
