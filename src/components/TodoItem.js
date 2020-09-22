import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default function TodoItem(props) {
    return (
        <View style={styles.item}>
            <Text style={styles.authorHeader}>{props.name}</Text>
            <Text style={styles.message}>{props.message}</Text>
            {!props.sent && <Text style={styles.networkError}>network failed</Text>}
            <TouchableOpacity onPress={props.sent ? props.onDelete : props.resend}>
                <Text style={{color: "red"}}>{props.sent ? 'hapus' : 'kirim ulang'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    networkError: {
        color: "red",
        fontSize: 8
    },
    authorHeader: {
        color: "green",
        fontSize: 16
    },
    message: {
        fontSize: 14
    },
    item: {
        padding: 10,
        height: 100,
    }
});