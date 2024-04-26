import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
	color: string;
}) {
	return (
		<MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />
	);
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: useClientOnlyValue(false, true),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerTitleAlign: "center",
					title: "Cat",
          headerTitle: '🐈',
					tabBarIcon: ({ color }) => <TabBarIcon name="cat" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="like"
				options={{
					headerTitleAlign: "center",
					title: "Favorite",
          headerTitle: '♥️',
					tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="dog"
				options={{
					headerTitleAlign: "center",
					title: "Dog",
          headerTitle: '🐕',
					tabBarIcon: ({ color }) => <TabBarIcon name="dog" color={color} />,
				}}
			/>
		</Tabs>
	);
}
