// @flow
import React from "react";
import { Root } from "native-base";
import { isSignedIn } from './utils/authenticate'
import RootNavigator from "./RootConfigure"
export interface Props {}
export interface State {}
export default class App extends React.Component<Props , State> {
	render() {
 			return (
				<Root>
					<RootNavigator />
				</Root>
			)
	}
}

