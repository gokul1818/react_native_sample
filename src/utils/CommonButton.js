import {
    StyleSheet,
    Pressable,
    Text, View
} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
const CommonButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, { backgroundColor: props.color }]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default CommonButton

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: "100%",
        height: 50,
        // flex:1,
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
    },
})