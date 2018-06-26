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
  list: any;
  myself: any;
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
        
          {/* <Button onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Text>Drawer</Text>
          </Button> */}
          {this.props.myself}
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
