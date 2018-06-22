// @flow
import * as React from "react";
import { Item, Input, Icon, Form, Toast , Button, Text , View} from "native-base";
import { observer, inject } from "mobx-react/native";
import Login from "../../stories/screens/Login";

export interface Props {
	navigation: any,
	loginForm: any,
	mainStore: any,			
}
export interface State {}

@inject("loginForm")
@inject("mainStore")
@observer
export default class LoginContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	login() {
		this.props.loginForm.validateForm();
		const body = JSON.stringify({
			username:this.props.loginForm.email, 
			password:this.props.loginForm.password
		})
		if (this.props.loginForm.isValid) {
			// fetch("http://stmtestwebservice.ecoachmanager.com/parent/login" , {
			// 	method: 'POST',
			// 	headers: {
			// 		'Accept': 'application/json',
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body,
			// })
			// .then((response)=>response.json())
			// .then((data)=>{
			// 	this.props.loginForm.clearStore();
			// 	this.props.mainStore.setUser(data)
			// 	this.props.navigation.navigate('Drawer')
			// })
			// .catch((err)=>console.log(err))
			this.props.loginForm.clearStore();
			this.props.navigation.navigate('Drawer')
		} else {
			Toast.show({
				text: "Enter Valid Email & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}
	render() {
		const form = this.props.loginForm;
		const signInForm = (
			<Form>
				<Item style={{padding:15}} error={form.emailError ? true : false}>
					<Icon active name="person" />
					<Input
						placeholder="Email"
						keyboardType="email-address"
						ref={c => (this.emailInput = c)}
						value={form.email}
						onBlur={() => form.validateEmail()}
						onChangeText={e => form.emailOnChange(e)}
					/>
				</Item>
				<Item style={{padding:15}} error={form.passwordError ? true : false}>
					<Icon active name="unlock" />
					<Input
						placeholder="Password"
						ref={c => (this.pwdinput = c)}
						value={form.password}
						onBlur={() => form.validatePassword()}
						onChangeText={e => form.passwordOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
			</Form>
		);
		const signUpForm = (
			<Form>
				<Item style={{padding:15}} error={form.emailError ? true : false}>
					<Icon active name="person" />
					<Input
						placeholder="Email"
						keyboardType="email-address"
						ref={c => (this.emailInput = c)}
						value={form.email}
						onBlur={() => form.validateEmail()}
						onChangeText={e => form.emailOnChange(e)}
					/>
				</Item>
				<Item style={{padding:15}} error={form.passwordError ? true : false}>
					<Icon active name="unlock" />
					<Input
						placeholder="Password"
						ref={c => (this.pwdinput = c)}
						value={form.password}
						onBlur={() => form.validatePassword()}
						onChangeText={e => form.passwordOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
				<View padder style={{marginTop:15,alignItems: "center",flexDirection:"row" , justifyContent:"space-around"}}>
					<Button block onPress={()=>form.toggleAgree()}>
						<Icon name={`${form.agree ? "checkbox" : "square"}`} />
						<Text>Accept condition to use application</Text>
					</Button>
				</View>
			</Form>
		)
		return <Login navigation={this.props.navigation} loginForm={signInForm} signUpform={signUpForm} onLogin={() => this.login()} />;
	}
}
