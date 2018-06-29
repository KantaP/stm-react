import * as React from "react";
import { observer, inject } from "mobx-react/native";
import Myself from "../../stories/screens/Myself";
import { onSignOut } from "../../utils/authenticate"
import { Alert } from 'react-native'
interface Props {
    navigation: any
}
interface State {}
class MyselfContainer extends React.Component<Props, State> {
    Logout() {
        Alert.alert(
            'Confirmation',
            'Are you confirm to sign out ?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: async () => {
                    await onSignOut()
                    this.props.navigation.navigate('Auth')
                }},
            ],
            { cancelable: false }
        )
        
    }
    render() {
        return (
            <Myself navigation={this.props.navigation} onSignout={()=>this.Logout()}/>
        )
    }
}

export default MyselfContainer