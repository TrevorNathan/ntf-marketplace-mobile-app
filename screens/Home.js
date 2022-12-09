import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useState } from "react";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar background={COLORS.primary} />

			{/* DATA LIST */}
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<FlatList
						data={NFTData}
						renderItem={({ item }) => <NFTCard data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader />}
					/>
				</View>
			</View>

			{/* BACKGROUND COLOR */}
			<View
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					right: 0,
					left: 0,
					zIndex: -1,
				}}
			>
				<View style={{ height: 300, backgroundColor: COLORS.primary }} />
				<View style={{ flex: 1, backgroundColor: COLORS.white }} />
			</View>
		</SafeAreaView>
	);
};

export default Home;
