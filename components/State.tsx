import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const State = () => {
    const [count, setcount] = useState(0)
    const[btntouch,setbtntouch]=useState(0)
    const changehandler = () => {
        setcount((prev) => prev + 5)
        setbtntouch((prev)=>prev+1)
    }
    return (
        <View>
            <Text>{count}</Text>
            <Text>{btntouch}</Text>

            <Button title='add by 5' onPress={changehandler} />
        </View>
    )
}

export default State

const styles = StyleSheet.create({})