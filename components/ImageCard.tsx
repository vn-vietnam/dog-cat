import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ImageCard = ({ item }: any) => {
	if (!item) {
		return null;
	}
	return (
		<Pressable
			style={{
				height: 300,
				marginVertical: 5,
				marginHorizontal: 5,
			}}
		>
			<Image
				style={styles.image}
				source={item.img}
				placeholder={blurhash}
				contentFit="cover"
				transition={1000}
			/>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	image: {
		flex: 1,
		width: "100%",
		backgroundColor: "#0553",
		borderRadius: 10,
		padding: 10,
	},
});
export default ImageCard;
