// @flow
import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";
import data from "./data";

import Children from '../ChildrenList'

export interface Props {
	navigation: any,
	mainStore: any,
}
export interface State {}

@inject("mainStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {
	componentWillMount() {
		
	}
	
	render() {
		const list = this.props.mainStore.items.toJS();
		return (
			<Home navigation={this.props.navigation} list={list} myself={(<Children />)} />
		);
	}
}
