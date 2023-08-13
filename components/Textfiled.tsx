import { StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native'
import React, { useState } from 'react'
import Password from './password';

const Textfiled = () => {
    const [password, setpassword] = useState('');
    const [value, setvalue] = useState('');

    const [name, setname] = useState()
    return (
        <View>
            <Text style={{ fontSize: 20, marginLeft: 20, marginVertical: 20 }}>Type your name</Text>
            <TextInput
                style={styles.input}
                onChangeText={setvalue}
                keyboardType='default'
                value={value}
                cursorColor={"skyblue"}

            />
            <TextInput
                style={styles.input}
                onChangeText={setpassword}
                keyboardType='default'
                value={password}
                cursorColor={"skyblue"}
                secureTextEntry
            />
            {/* <TextInput
                // editable
                autoCorrect
                // inlineImageLeft=''
                // autoComplete='additional-name'
                // multiline
                cursorColor={"skyblue"}
                // numberOfLines={4}
                maxLength={40}
                onChangeText={text => setvalue(text)}
                value={value}
                style={{ padding: 10 }}
            /> */}
            <Text>your name is:{value}</Text>
            <Text>your password is:{password
            }</Text>


        </View>
    )
}

export default Textfiled

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 20,
        marginVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#fff",
        // width: 100,
        borderWidth: 1

    }
})