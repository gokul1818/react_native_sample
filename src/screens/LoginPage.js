import { ImageBackground, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { Image } from 'react-native-paper/lib/typescript/src/components/List/List'

const LoginPage = () => {
    return (
        <View style={styles.body} >
            {/* <ImageBackground style={styles.background} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4m92pnLReU66jdf6Nuy-LZFE9p0bLM1M9GP-YUrRoVHgW77rvPcgCQh7mPPnkUlcfc8Q&usqp=CAU' }}> */}

            <Text style={styles.header}>Pik<Text style={[styles.header, { color: "#20d5d8" }]}>up</Text></Text>
            <TextInput
                placeholder='E-mail'
                placeholderTextColor={"grey"}
                style={styles.inputfiled}
            >
            </TextInput>
            <TextInput
                placeholder='Password'
                placeholderTextColor={"grey"}
                style={styles.inputfiled}>
            </TextInput>
            <View style={styles.button} >

                <TouchableOpacity style={styles.loginbtn} >
                    <Text style={styles.btnlabel}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.textlabel, { marginTop: 0 }]}>
                Forget Password?
            </Text>
            <View style={{ borderBottomWidth: 1, marginTop: 20, marginBottom: 10, borderStyle: "solid", borderColor: '#cacbcf', width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={styles.signuplabel}>
                    Sign up With
                </Text>
            </View>
            <View style={{ width: '80%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-start' }}>
                <TouchableOpacity style={styles.signbtn}>
                    <Text style={{ color: "#20d5d8" }}>GOOGLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signbtn}>
                    <Text style={{ color: "#20d5d8" }}>EMAIL</Text>
                </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
        </View >
    )
}

export default LoginPage

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-around',
        backgroundColor: "#f9f9f5",
        width: "100%",
        height: '100%'
    },
    background: {
        width: "100%",
        height: '100%',

    },
    header: {
        color: "#000",
        marginVertical: 60,
        fontSize: 50,
        fontWeight: "bold",
        // backgroundColor:'green'
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    inputfiled: {
        width: '85%',
        borderColor: "#eeeeee",
        borderWidth: 1,
        height: 50,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        paddingLeft: 20,
        borderRadius: 50,
        color: '#000'
    },
    button: {
        backgroundColor: '#20d5d8',
        width: '85%',
        borderColor: "#eeeeee",
        borderWidth: 1,
        height: 50,
        color: "#fff",
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingLeft: 20,
        borderRadius: 50
    },
    loginbtn: {
        alignItems: 'center'
        ,
        justifyContent: 'center',
    },
    btnlabel: {
        fontSize: 15,
        // fontWeight: 'bold',
        letterSpacing: 3,
        color: '#fff'

    },
    textlabel: {
        marginVertical: 20,
        fontSize: 15,
        color: '#000'
    },
    signbtn: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 50,
        borderColor: "#20d5d8",
        backgroundColor: '#ffffff',
    }, signuplabel: {
        color: '#cacbcf',
        backgroundColor: '#fff',
        padding: 10,
        position: 'absolute',
        backgroundColor: "#f9f9f5",


    }
})