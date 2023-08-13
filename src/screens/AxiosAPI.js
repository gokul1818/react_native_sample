import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseurl = 'https://fakestoreapi.com/products';

const AxiosAPI = () => {
    const [data, setdata] = useState()
    useEffect(() => {
        axios
            .get(baseurl)
            .then((response) => {
                console.log(response.data);
                setdata(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <View style={{ backgroundColor: '#000' }}>
            <Text style={styles.heading}>axios method </Text>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View>
                        <Text>
                            {item.title}

                        </Text>
                        <Text> {item.price
                        }</Text>
                    </View>
                }
            />

        </View>
    );
};

export default AxiosAPI;

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: "green"
        , textAlign: 'center',
        marginVertical: 20,

    },
});
