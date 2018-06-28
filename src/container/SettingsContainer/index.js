import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Settings from "../../stories/screens/Settings";

export interface Props {
    navigation: any,
    settingStore: any
}
export interface State {}
@inject("settingStore")
@observer
export default class SettingsContainer extends React.Component<Props, State> {
    onSwitchValueChange(key , value) {
        console.log(key, value)
        this.props.settingStore.setNotification(key,value)
    }
    render() {
        return (
            <Settings 
            navigation={this.props.navigation} 
            onSwitchValueChange={(key,value)=>this.onSwitchValueChange(key,value)}
            notiEmail={this.props.settingStore.noti_email}
            notiPhone={this.props.settingStore.noti_phone}
            />
        )
    }
}