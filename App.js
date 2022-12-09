import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "transparent",
	},
};

const App = () => {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName='Home'
			>
				{/* HOME SCREEN */}
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						header: () => null,
					}}
				/>

				{/* DETAILS SCREEN */}
				<Stack.Screen
					name='Details'
					component={Details}
					options={{
						header: () => null,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
