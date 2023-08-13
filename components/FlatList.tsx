import { RefreshControl, StyleSheet, Text, View } from 'react-native'
import { FlatList, SectionList } from 'react-native'
import React, { useState } from 'react'


const Flatview = () => {

    const [data, setdata] = useState([{ title: 1, data: ["item:1-1", "item:1-1"], footer: 1 },])
    const [state, setstate] = useState([{ name: 'item1' }, { name: 'item1' }, { name: 'item1' }, { name: 'item1' }, { name: 'item1' }, { name: 'item1' }, { name: 'item1' }, { name: 'item1' }])
    const [refresh, setrefresh] = useState(false)
    const onRefreshset = () => {
        setrefresh(true)
        setstate([...state, { name: 'gokul' }]
        )
        setrefresh(false)
    }
    const onRefresh = () => {
        setrefresh(true);
        const newData = { title: data.length + 1, data: [], footer: data.length + 1 };
        setdata(prevData => [...prevData, newData]);
        setrefresh(false);
    };


    return (
        <View>
            <Text style={styles.flatHeading}>FlatList Tag</Text>
            <FlatList
                horizontal
                // numColumns={}
                keyExtractor={(item, index) => index.toString()}
                data={state}
                renderItem={({ item }) => (

                    <View style={styles.view}>
                        <Text style={styles.flattext} >{item.name}</Text>
                    </View>
                )
                }

                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={onRefreshset}
                    />
                }
            />
            <Text style={styles.flatHeading}>Section List Tag</Text>

            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={data}
                // data={data}
                renderItem={({ item }) => (
                    <Text> {item}</Text>
                )}
                renderSectionHeader={({ section }) => (
                    <Text>Header:{section.title}</Text>
                )}
                renderSectionFooter={({ section }) => (
                    <Text>Footer:{section.footer}</Text>
                )}

                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={onRefresh}
                    />
                }

            />
        </View>
    )
}

export default Flatview

const styles = StyleSheet.create({
    flatHeading: { fontSize: 32 },
    view: {
        flex: 1,
        height: 50,
        backgroundColor: 'skyblue',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',

        margin: 6
    },
    flattext: {
        marginLeft: 15,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'

    }
})