// @flow
import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";
import ChildrenList from "../ChildrenList"


export interface Props {
	navigation: any,
	mainStore: any,
}
export interface State {}

@inject("mainStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {
	onSearchChild(query:string) {
		console.log("search", query)
		this.props.mainStore.setQueryChild(query)
	}
	render() {
		return (
			<Home 
				navigation={this.props.navigation} 
				childrenList={<ChildrenList />}
				onSearchChild={(query)=>this.onSearchChild(query)}
			/>
		);
	}
}
