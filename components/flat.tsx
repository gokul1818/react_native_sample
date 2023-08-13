import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Flat = () => {
  return (
    <View>
      <Text style={styles.heading}>Flat</Text>
      <View style={styles.container}>
        <View style={[styles.box, styles.elevated]}>
          <Text style={styles.text}>tap</Text>
        </View>
        <View style={[styles.box, styles.elevated]}>
          <Text style={styles.text}>tap</Text>
        </View>
        <View style={[styles.box, styles.elevated]}>
          <Text style={styles.text}>tap</Text>
        </View>
      </View>
    </View>
  );
};

export default Flat;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  elevated: {
    elevation: 3,
    shadowOffset: {
      width: 16,
      height: -17,
    },
    shadowColor: '#fff',
    shadowRadius: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 12,
    flexDirection: 'row',
  },
  box: {
    margin: 6,
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    color: '#8c8477',
  },
});
