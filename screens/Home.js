import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useState } from "react";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text>Home</Text>
		</SafeAreaView>
	);
};

export default Home;
