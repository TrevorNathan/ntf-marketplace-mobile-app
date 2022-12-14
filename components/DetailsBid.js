import { View, Text, Image } from "react-native";
import React from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../constants";

const DetailsBid = ({ bid }) => {
	return (
		<View
			style={{
				width: "100%",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginVertical: SIZES.base,
				paddingHorizontal: SIZES.base * 2,
			}}
		>
			{/* BIDDER-IMAGE */}
			<Image
				source={bid.image}
				resizeMode='contain'
				style={{ width: 48, height: 48 }}
			/>

			{/* BIDDER-NAME + DATE */}
			<View>
				<Text
					style={{
						fontFamily: FONTS.semiBold,
						fontSize: SIZES.small,
						color: COLORS.primary,
					}}
				>
					Bid placed by {bid.name}
				</Text>
				<Text
					style={{
						fontFamily: FONTS.regular,
						fontSize: SIZES.small - 2,
						color: COLORS.secondary,
						marginTop: 3,
					}}
				>
					{bid.date}
				</Text>
			</View>

			{/* PRICE */}
			<EthPrice price={bid.price} />
		</View>
	);
};

export default DetailsBid;
