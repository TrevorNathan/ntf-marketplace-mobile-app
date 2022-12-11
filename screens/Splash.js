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
			<Text
				style={{
					color: "white",
					fontSize: 30,
					fontWeight: "bold",
					marginTop: "75%",
				}}
			>
				VREMCAST
			</Text>
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
		marginTop: "30%",
	},
});

export default Splash;
