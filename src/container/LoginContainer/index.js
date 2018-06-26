// @flow
import * as React from "react";
import { Item, Input, Icon, Form, Toast , Button, Text , View} from "native-base";
import { observer, inject } from "mobx-react/native";
import {ToastAndroid} from 'react-native'
import Login from "../../stories/screens/Login";
import { onSignIn , setStorage } from '../../utils/authenticate'
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
			fetch("http://192.168.1.21:3001/login" , {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body,
			})
			.then((response)=>{
				if(response.status == 200) {
					return response.json()
				}else {
					ToastAndroid.show("Enter Valid Email & password!" , ToastAndroid.SHORT);
				}
			})
			.then((data)=>{
				if(data) {
					console.log(data)
					onSignIn()
					.then(()=>{
						return setStorage('@user', data)
					})
					.then(()=>{
						this.props.loginForm.clearStore();
						this.props.mainStore.setUser(data)
						this.props.navigation.navigate('Drawer')
					})
					.catch((err)=>console.log(err))
				}

			})
			.catch((err)=>console.log(err))
		} else {
			ToastAndroid.show("Enter Valid Email & password!" , ToastAndroid.SHORT);
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
