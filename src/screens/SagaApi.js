import { StyleSheet, Text, Image, FlatList, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/action';

const SagaApi = () => {
    const dispatch = useDispatch(); 
    const data = useSelector((state) => state.tasks.data);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <View style={styles.bg}>
            <Text style={styles.heading}>Redux-saga</Text>

            <FlatList data={data}
                renderItem={({ item }) =>

                    <View key={item.id}>
                        <Text>{item.title}</Text>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text>{item.price}</Text>
                    </View>
                }
            />
        </View>
    );
};

export default SagaApi;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#000'
    }, image: {
        width: 150,
        height: 150,
        alignItems: 'center',
        // textAlign: 'center'
    }, heading: {
        fontSize: 20,
        color: "red"
        , textAlign: 'center',
        marginVertical: 20,

    },
});
