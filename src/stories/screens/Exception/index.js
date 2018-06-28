import * as React from "react";
import * as styles from "./styles"
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


interface Props {
    navigation: any;
}
interface State {}
class ExceptionScreen extends React.Component<Props, State> {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="list-box" style={{color:"#fff"}}/>
                    </Left>
                    <Body>
                        <Title>Exception</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        )
    }
}

export default ExceptionScreen