import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace("Home");
		}, [1500]);
	}, []);
	return (
		<View style={styles.body}>
			<Image
				style={styles.logo}
				source={require("../assets/vremcast_square.png")}
			/>
			<Text style={{ fontSize: 30, fontWeight: "bold" }}>VREMCAST</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#f13e31",
	},
	logo: {
		width: 300,
		height: 300,
		margin: 20,
	},
});

export default Splash;
