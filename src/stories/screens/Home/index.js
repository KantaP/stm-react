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
  childlist: any;
  footertab: any;
  onSwitchScreen: any;
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
          {this.props.footertab === 'feeds' && this.props.childlist}
          {this.props.footertab === 'myself' && 
          (
            <Button onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            </Button>
          )}
        </Content>
        <Footer>
          <FooterTab>
            <Button active={this.props.footertab === 'feeds'} onPress={()=>this.props.onSwitchScreen("feeds")}>
              <Icon  name="apps" />
            </Button>
            <Button active={this.props.footertab === 'exception'} onPress={()=>this.props.onSwitchScreen("exception")}>
              <Icon  name="camera" />
            </Button>
            <Button active={this.props.footertab === 'setting'} onPress={()=>this.props.onSwitchScreen("setting")}>
              <Icon  name="navigate" />
            </Button>
            <Button active={this.props.footertab === 'myself'} onPress={()=>this.props.onSwitchScreen("myself")}>
              <Icon  name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
