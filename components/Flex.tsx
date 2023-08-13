import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.flexcloumn}>

                <View style={styles.one}><Text style={styles.textclr}>1</Text></View>
                <View style={styles.two}><Text style={styles.textclr}>2</Text></View>
                <View style={styles.three}><Text style={styles.textclr}>3</Text></View>
            </View>
            <View style={styles.flexrow}>

                <View style={styles.four}><Text style={styles.textclr}>4</Text></View>
                <View style={styles.five}><Text style={styles.textclr}>5</Text></View>
            </View>
            <View style={styles.column}>

                <View style={styles.six}><Text style={styles.textclr}>6</Text></View>
                <View style={styles.seven}><Text style={styles.textclr}>7</Text></View>
            </View>

        </View>
    )
}

export default Flex

const styles = StyleSheet.create({
    flexcloumn: {
        flexDirection: 'row',
        // , height: "10%",
        flex:1
    },
    one: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
        , backgroundColor: 'red'
    },
    textclr: {
        color: '#000'
        , fontSize: 25
        , fontWeight: 'bold'
    },
    two: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
        , backgroundColor: 'yellow'
    },
    three: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
        , backgroundColor: 'green'
    }
    , flexrow: {
        // height: "10%",
        flex:1

    },
    four: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
        , backgroundColor: 'blue'
    },
    five: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
        , backgroundColor: 'violet'
    },
    column: {
        flex: 3,
        flexDirection: 'row',
        // height: '70%'


    },
    six: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
        , backgroundColor: 'blue'
    },
    seven: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
        , backgroundColor: 'orange'
    }

})