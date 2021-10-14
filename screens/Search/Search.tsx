import React from 'react';
import MapView from 'react-native-maps';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
	return (
		<View style={styles.container}>
			<Text>Search Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Home;
