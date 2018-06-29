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
  Body,
  Title
} from "native-base";

interface Props {
    navigation: any;
    onSignout: any;
}
interface State {}
class MyselfScreen extends React.Component<Props,State> {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="person" style={{color:"#fff"}}/>
                    </Left>
                    <Body>
                        <Title>User</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        <ListItem onPress={()=>this.props.onSignout()}>
                            <Left>
                                <Text>Sign Out</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-dropright-circle" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default MyselfScreen