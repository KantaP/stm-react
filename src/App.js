// @flow
import React from "react";
import { Root } from "native-base";
import { isSignedIn } from './utils/authenticate'

import { RootNavigator } from "./RootConfigure"
export interface Props {}
export interface State {
	signedIn: boolean;
	readyState: boolean
}
export default class App extends React.Component<Props , State> {
	state: {
		signedIn: boolean,
		readyState: boolean
	};
	constructor() {
		super();
		this.state = {
			signedIn: false,
			readyState: false
		};
	}
	async componentWillMount() {
		const user = await isSignedIn()
		console.log('user logged:' , user)
		this.setState({signedIn:(user) ? true : false , readyState: true})
	}

	render() {
		console.log(this.state)
		const { signedIn  , readyState} = this.state;
    	const Layout = RootNavigator(signedIn);
		if(readyState) {
			return (

					<Root>
						<Layout />
					</Root>

			)
		}else {
			return null
		}
		
	}
}

