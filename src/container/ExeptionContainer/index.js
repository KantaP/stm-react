import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Exception from "../../stories/screens/Exception";

interface Props {
    navigation: any,
    settingStore: any
}
interface State {}
class ExceptionContainer extends React.Component<Props, State> {
    render() {
        return (
            <Exception navigation={this.props.navigation} />
        )
    }
}

export default ExceptionContainer