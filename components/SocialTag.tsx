import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SocialTag = () => {
    const people = [
        { name: "Johny", image: "https://i.pinimg.com/originals/de/97/55/de975595890f0ed79238dc4d61532777.jpg", age: 25 },
        { name: "Emily", image: "https://th.bing.com/th?id=OIP.bJDUd0RIdMTk0rwFXuNgUQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", age: 30 },

        { name: "Rexa", image: "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", age: 35 },
        // Add more objects as needed
    ];

    return (
        <View>
            <Text style={styles.heading}>Social Profiles </Text>
            <View style={styles.container}>
                {people.map((person, index) =>
                    <View key={index} style={styles.imgcard}>

                        <Image style={styles.image} source={{ uri: person.image }} />
                        <View>

                        <Text style={styles.text} > Name:{person.name} </Text>
                        <Text style={styles.text} >Age:{person.age} </Text>
                        </View>

                    </View>

                )}
            </View>
        </View>
    )
}

export default SocialTag

const styles = StyleSheet.create({
    heading: {
        fontSize: 22
        ,marginLeft:15,
        fontWeight:'bold'
    },
    container: {
        padding: 12,
        backgroundColor: "#77767c"
    },
    imgcard: {
        backgroundColor: "#e2e2e2",
        flex: 1,
        flexDirection:'row',
        marginVertical: 10,
        alignItems:"center",
        borderRadius:20,
        // justifyContent: 'center'
    },
    image: {
        width: 100, height: 100, borderRadius: 50
        , margin: 10,
    },
    text: {
        color: '#000'
        , fontSize: 15,
        marginLeft:10,
        fontWeight:'bold',
        marginVertical:10

    }

})