import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Settings from "../../stories/screens/Settings";
import SettingList from "./SettingList"
export interface Props {
    navigation: any,
    settingStore: any
}
export interface State {}
@inject("settingStore")
@observer
export default class SettingsContainer extends React.Component<Props, State> {
    render() {
        return (
            <Settings 
            navigation={this.props.navigation} 
            settingList={(<SettingList />)}
            />
        )
    }
}