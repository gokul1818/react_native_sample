import { Button, RefreshControl, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ButtonFiled = () => {
    const [submited, setsubmit] = useState(false)
    const [count, setcount] = useState(0)

    return (
        <View>
            <Text style={{ fontSize: 20, margin: 20 }}>ButtonFiled</Text>
            <Button title='submit' onPress={() => setcount(count + 1)} />
            <Text>count value is: {count}</Text>
            <TouchableOpacity style={styles.btn}
                activeOpacity={0.9}

                onLongPress={() =>
                    setsubmit(!submited)

                }
            ><Text>{submited ? "clear" : "submit"}</Text></TouchableOpacity>
            {submited &&

                <Text style={{ fontSize: 20, margin: 20 }}>submitted Successfully</Text>}
        </View>
    )
}

export default ButtonFiled

const styles = StyleSheet.create({
    btn: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        marginVertical: 20,

    }


})