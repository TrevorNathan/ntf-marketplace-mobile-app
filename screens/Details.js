import React from "react";
import {
	View,
	Text,
	Pressable,
	SafeAreaView,
	FlatList,
	Image,
} from "react-native";
import {
	CircularButton,
	DetailsBid,
	DetailsDesc,
	FocusedStatusBar,
	RectButton,
	SubInfo,
} from "../components";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";

// DETAILS-HEADER
const DetailsHeader = ({ data, navigation }) => {
	return (
		// IMAGE + BUTTONS
		<View style={{ width: "100%", height: 373 }}>
			<Image
				source={data.image}
				resizeMode='cover'
				style={{ width: "100%", height: "100%" }}
			/>

			<CircularButton
				imgUrl={assets.left}
				handlePress={() => navigation.goBack()}
				left={15}
				top={statusbar.currenHeight + 10}
			/>

			<CircularButton
				imgUrl={assets.heart}
				handlePress={() => console.log("Liked...")}
				right={15}
				top={statusbar.currenHeight + 10}
			/>
		</View>
	);
};

const Details = ({ route, navigation }) => {
	const { data } = route.params;
	console.log(data);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* STATUS-BAR */}
			<FocusedStatusBar
				barStyle='dark-content'
				backgroundColor='transparent'
				translucent={true}
			/>

			{/* BUTTON */}
			<View
				style={{
					width: "100%",
					position: "absolute",
					bottom: 0,
					paddingVertical: SIZES.font,
					justifyContent: "center",
					backgroundColor: "rgba(255, 255, 255, 0.5)",
					zIndex: 1,
				}}
			>
				<RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
			</View>

			{/* DATA LIST */}
			<FlatList
				data={data.bids}
				renderItem={({ item }) => <DetailsBid bid={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
				ListHeaderComponent={() => (
					// DETAILS-HEADER + SUB-INFO + DETAILS-DESC
					<React.Fragment>
						<DetailsHeader data={data} navigation={navigation} />

						<SubInfo />

						<View style={{ padding: SIZES.font }}>
							<DetailsDesc data={data} />

							{data.bids.length > 0 && (
								<Text
									style={{
										fontSize: SIZES.font,
										fontFamily: FONTS.semiBold,
										color: COLORS.primary,
									}}
								>
									Current Bid
								</Text>
							)}
						</View>
					</React.Fragment>
				)}
			/>
		</SafeAreaView>
	);
};

export default Details;
