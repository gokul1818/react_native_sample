import { Alert, Button, RefreshControl, StyleSheet, Text, ToastAndroid, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const AlertandToast = () => {

    const openAlerthandler = () => {
        Alert.alert("alert", "This is alert method in react_native ", [
            {

                text: 'ok',
                onPress: () => console.log('Ask me later pressed'),

            }

        ])
    }
    const showToast = () => {
        ToastAndroid.showWithGravity("this is in-bulit toast for android users only", ToastAndroid.SHORT, ToastAndroid.TOP)
    }
    return (
        <View>
            <Text style={{ fontSize: 20, margin: 20 }}>Alert and Toast</Text>
            <Button title='alert' onPress={() => openAlerthandler()} />
            <TouchableOpacity style={styles.btn}
                activeOpacity={0.9}

                onPress={() =>
                    showToast()

                }
            ><Text> Toast in android</Text></TouchableOpacity>

        </View>
    )
}

export default AlertandToast

const styles = StyleSheet.create({
    btn: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        marginVertical: 20,

    }
})