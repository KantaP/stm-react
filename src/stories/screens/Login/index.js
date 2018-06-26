import * as React from "react";
import { Image, Platform  } from "react-native";
import { WebBrowser } from 'expo'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer , Tab, Tabs} from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	gotoMyFaceBook() {
		WebBrowser.openBrowserAsync("https://www.facebook.com/hide.t.hyde")
	}
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center"}}>
						{/* <Icon name="flash" style={{ fontSize: 104 }} /> */}
						<Title style={{ fontSize: 104 , fontFamily: 'Atvice'  }}>STM</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" , fontFamily: 'Atvice' }}>
								School Travel Manager
							</Text>
						</View>
					</Body>
				</Header>
				<Content style={{backgroundColor:"#fff"}}>
					<Tabs initialPage={0}>
						<Tab heading="Sign In">
							{this.props.loginForm}
							<View padder style={{marginTop:"50%"}}>
								<Button block onPress={() => this.props.onLogin()}>
									<Text>Sign In</Text>
								</Button>
							</View>
						</Tab>
						<Tab heading="Sign Up">
							{this.props.signUpform}
							<View padder style={{marginTop:"35%"}}>
								<Button block>
									<Text>Sign Up</Text>
								</Button>
							</View>
						</Tab>
					</Tabs>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Made by K.B.</Text>
						</View>
						<View padder>
							<Button small onPress={()=>this.gotoMyFaceBook()}>
								<Icon name="logo-facebook" />
							</Button>
						</View>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
