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
    onSwitchValueChange: any;
    notiEmail:any;
    notiPhone: any;
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
                    <List>
                        <ListItem itemHeader first>
                            <Text>Notification</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Email</Text>
                            </Left>
                            <Right>
                                <Switch value={this.props.notiEmail} onValueChange={this.props.onSwitchValueChange('email',!this.props.notiEmail)}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Phone</Text>
                            </Left>
                            <Right>
                                <Switch value={this.props.notiPhone} onValueChange={this.props.onSwitchValueChange('phone',!this.props.notiPhone)}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default SettingsScreen