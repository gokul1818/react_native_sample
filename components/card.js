import { Button, Image, StyleSheet, Text, TextBase, Alert, Linking, View, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'

const Card = ({navigation}) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL("https://google.com");

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL("https://google.com");
        } else {
            Alert.alert(`Don't know how to open this URL: ${"url"}`);
        }
    }, []);
    const openWebsite = () => {
        Linking.openURL("https://en.wikipedia.org/wiki/Naruto")
    }
    return (
        <View>

            <Text style={{ fontSize: 22, marginHorizontal: 20, marginTop: 10, fontWeight: 'bold' }}>card view</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image source={{ uri: "https://th.bing.com/th?id=OIP.bJDUd0RIdMTk0rwFXuNgUQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" }} style={{ width: "auto", height: 200, margin: 15, borderRadius: 20 }} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000', marginHorizontal: 20, }}>Naruto</Text>
                    <Text numberOfLines={3} style={{ fontSize: 15, fontWeight: 'bold', margin: 20, color: '#000' }}>Genre:
                        <Text numberOfLines={3} style={{ fontSize: 12, color: '#140f07' }}>
                            Shounen Anime,Action Anime,Family Watch Togethe…
                            Guided by the spirit demon within him, orphaned Naruto learns to harness his powers as a ninja in this anime adventure series
                        </Text>
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000', marginHorizontal: 20, }}>Year: 2002</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000', marginHorizontal: 20, }}>Rating:10/10</Text>

                    <View style={{ width: 150, flex: 1, alignItems: 'flex-start',  justifyContent: "flex-end", paddingBottom: 10,paddingHorizontal:15 }}>

                        <TouchableOpacity style={{backgroundColor:'#181934' , padding:5, borderRadius:10}} onPress={() => openWebsite()} >
                            <Text>open Web</Text>
                        </TouchableOpacity>
                    </View>

                    <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('sideScroll')}
      />

                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        height: 500,
        backgroundColor: '#927af5',
        borderRadius: 10,
        width: 400,
    },
})