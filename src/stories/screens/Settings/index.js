import * as React from "react";
import * as styles from "./styles";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  List,
  ListItem , 
  Item , 
  Input,
  Left ,
  Right ,
  Body ,
  Title
} from "native-base";
import { Switch } from 'react-native';

interface Props {
    navigation:any;
    settingList: any;
}
interface State {}
class SettingsScreen extends React.Component<Props,State> {
    render() {
        return (
                <Container style={styles.container}>
                    <Header >
                        <Left>
                            <Icon name="settings" style={{color:"#fff"}}/>
                        </Left>
                        <Body>
                            <Title>Settings</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                    {
                        this.props.settingList
                    }
                    </Content>
                </Container>
                
        )
    }
}

export default SettingsScreen