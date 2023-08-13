import { StyleSheet, Platform } from 'react-native';
import Flex from '../../components/Flex';

export default StyleSheet.create({
    CustomFontBig: {
        fontFamily: 'AbrilFatface-Regular'
    },
    CustomFontHW: {
        fontFamily: Platform.OS === 'ios' ? 'IndieFlower' : 'IndieFlower-Regular'
    },
    bagckground: {
        flex: 1,
        // alignItems: 'center',
        // width: '100%',
        // height: '100%',
        backgroundColor: "#282746",
    }
});