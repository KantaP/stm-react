import * as React from "react";
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
  Footer,
  FooterTab
} from "native-base";
import styles from "./styles";

export interface Props {
  navigation: any;
  childrenList: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          {this.props.childrenList}
        </Content>
      </Container>
    );
  }
}

export default Home;
