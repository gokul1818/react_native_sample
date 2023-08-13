import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SideScroll = () => {
    return (
        <View>
            <Text style={styles.heading}>SideScroll</Text>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://allpicts.in/wp-content/uploads/2018/03/Natural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg' }} />
                        <Text style={{ fontSize: 12, color: '#fff' }}>image</Text>

                    </View>

                    <View style={styles.box}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://allpicts.in/wp-content/uploads/2018/03/Natural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg' }} />
                        <Text style={{ fontSize: 12, color: '#fff' }}>image</Text>

                    </View><View style={styles.box}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://allpicts.in/wp-content/uploads/2018/03/Natural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg' }} />
                        <Text style={{ fontSize: 12, color: '#fff' }}>image</Text>

                    </View><View style={styles.box}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://allpicts.in/wp-content/uploads/2018/03/Natural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg' }} />
                        <Text style={{ fontSize: 12, color: '#fff' }}>image</Text>

                    </View><View style={styles.box}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://allpicts.in/wp-content/uploads/2018/03/Natural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg' }} />
                        <Text style={{ fontSize: 12, color: '#fff' }}>image</Text>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SideScroll

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 10,

    },
    container: {
        flex: 1,
        flexDirection: "row",


    },
    box: {
        marginHorizontal: 12,
        marginTop: 12,

        // backgroundColor: '#c8c5ff'
    }
})