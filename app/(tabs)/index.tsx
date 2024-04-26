import { Dimensions, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "@/components/ImageCard";
const DATA = [
	{
		title: "First Item",
		img: "https://plus.unsplash.com/premium_photo-1714078254516-f7ff6ea91499?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		id: 1,
	},
	{
		title: "Second Item",
		img: "https://images.unsplash.com/photo-1713816823711-c672e21edbc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		id: 2,
	},
	{
		title: "Second Item",
		img: "https://images.unsplash.com/photo-1714052326829-f63c6172382c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		id: 3,
	},
	{
		title: "Second Item",
		img: "https://images.unsplash.com/photo-1713815713124-362af0201f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		id: 4,
	},
	{
		title: "Second Item",
		img: "https://images.unsplash.com/photo-1713968641753-fa6c2be7dd0f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		id: 5,
	},
	{
		title: "Second Item",
		img: "https://images.unsplash.com/photo-1714075853573-0bbf3c6f1d79?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		id: 6,
	},
];
export default function TabOneScreen() {
	return (
		<View style={{ height: "100%", width: Dimensions.get("screen").width }}>
			<MasonryFlashList
				data={DATA}
				numColumns={2}
				renderItem={({ item }) => <ImageCard item={item} />}
				estimatedItemSize={200}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		minHeight: 3,
		width: "auto",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
