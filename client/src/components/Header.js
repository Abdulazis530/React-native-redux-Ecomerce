import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>Toko Hape.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:40,
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        letterSpacing:1,
        marginLeft:10
    }
})