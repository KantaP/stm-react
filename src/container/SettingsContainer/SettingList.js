import * as React from 'react';
import { Mutation , Query} from "react-apollo";
import { observer, inject } from "mobx-react/native";
import { contactOptions , updateContactOption } from "../../apollo/gql"
import {  Switch } from 'react-native';
import { Spinner , List , ListItem , Left , Right , Text , Body } from 'native-base'
interface Props {
    settingStore: any;
}
interface State {}
@inject("settingStore")
@observer
class SettingList extends React.Component {
    switchSelect: any;
    onSwitchValueChange(key , value) {
        this.props.settingStore.setNotification(key,value)
    }
    render() {
        const { noti_email , noti_phone } = this.props.settingStore
        return(
            <Query query={contactOptions}>
                    {({ loading, error, data }) => {
                        if(loading) return(<Spinner />)
                        if(error) return (<Text> {JSON.stringify(error)} </Text>)
                        console.log(data)
                        return (
                                <Mutation 
                                mutation={updateContactOption}
                                update={(cache, { data: { parentUpdateContactOption } }) => {
                         
                                    let data = cache.readQuery({ query: contactOptions });
                                    data['parentContactOptions'][this.switchSelect] = !data['parentContactOptions'][this.switchSelect]
                                    cache.writeQuery({
                                        query: contactOptions,
                                        data: data
                                    });
                                }}
                                >
                                    { parentUpdateContactOption => (
                                         <List>
                                            <ListItem itemHeader first>
                                                <Text>Notification</Text>
                                            </ListItem>
                                            <ListItem>
                                                <Left> 
                                                    <Text>Email</Text>
                                                </Left>
                                                <Right>
                                                    <Switch 
                                                    value={!!+data.parentContactOptions.accept_email} 
                                                    onValueChange={(e)=>{
                                                        this.switchSelect = "accept_email"
                                                        parentUpdateContactOption({
                                                            variables: {
                                                                input: {
                                                                    key: "accept_email",
                                                                    value: !data.parentContactOptions.accept_email
                                                                }
                                                            }
                                                        })
                                                    }}/>
                                                </Right>
                                            </ListItem>
                                            <ListItem>
                                                <Left>
                                                    <Text>Phone</Text>
                                                </Left>
                                                <Right>
                                                    <Switch 
                                                    value={!!+data.parentContactOptions.accept_notification} 
                                                    onValueChange={(e)=>{
                                                        this.switchSelect = "accept_notification"
                                                        parentUpdateContactOption({
                                                            variables: {
                                                                input: {
                                                                    key: "accept_notification",
                                                                    value: !data.parentContactOptions.accept_notification
                                                                }
                                                            }
                                                        })
                                                    }}/>
                                                </Right>
                                            </ListItem>
                                        </List>
                                    )}
                                </Mutation>
                        )
                    }}
            </Query>
        )
    }
}

export default SettingList