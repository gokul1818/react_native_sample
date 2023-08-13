import { FlatList, ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';


const Fetchapi = () => {
    const [data, setdata] = useState([]);

    const getdata = async () => {
        const url = "https://fakestoreapi.com/products"
        const response = await fetch(url)
        try {
            const result = await response.json()
            setdata(result)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <View style={{ backgroundColor: 'black' }}>

            <Text style={styles.heading}>
                FETCH DATA  API INTEGRATION
            </Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text style={{ color: '#fff' }}>{item.title}</Text>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={{ color: '#fff' }}>{item.price}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Fetchapi;

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: "green"
        , textAlign: 'center',
        marginVertical: 20,

    }, image: {
        width: 150,
        height: 150,
        alignItems: 'center',
        // textAlign: 'center'
    }
});
