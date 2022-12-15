import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants';

const Splash = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace('Home');
		}, [1500]);
	}, []);

	return (
		<View style={styles.container}>
			<Image
				source={assets.logo}
				resizeMode='contain'
				style={{
					width: 200,
					height: 200,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#001F2D',
	},
});

export default Splash;
