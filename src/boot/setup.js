import * as Expo from "expo";
import * as React from "react";
import client from '../apollo/client'
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";
import { ApolloProvider } from "react-apollo";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export interface Props {}
export interface State {
	isReady: boolean,
}

export default function(stores) {
	return class Setup extends React.Component<Props, State> {
		state: {
			isReady: boolean,
		};
		constructor() {
			super();
			this.state = {
				isReady: false,
			};
		}
		componentWillMount() {
			this.loadFonts();
		}
		async loadFonts() {
			await Expo.Font.loadAsync({
				Roboto: require("native-base/Fonts/Roboto.ttf"),
				Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
				Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
				Atvice: require("../../assets/fonts/ATViCE.ttf")
			});
			
			this.setState({ isReady: true });
		}

		render() {
			if (!this.state.isReady) {
				return <Expo.AppLoading />;
			}
			return (
				<ApolloProvider client={client}>
					<StyleProvider style={getTheme(variables)}>
						<Provider {...stores}>
							<App />
						</Provider>
					</StyleProvider>
				</ApolloProvider>
			);
		}
	};
}
