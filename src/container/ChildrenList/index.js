import React from 'react';
import { Query } from 'react-apollo'
import * as gqlList from '../../apollo/gql'
import {Text , List , Card , CardItem , Left , Body , Right ,Thumbnail , Button , Icon } from 'native-base'
import moment from 'moment'
import { MapView } from "expo";
interface Props {}
interface State {}
class Children extends React.Component<Props , State> {
    render() {
        const variables = {date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm'), timezone: moment().format('Z')}
        return(
            <Query
                query={gqlList.getParentPassenger}
                variables={variables}
            >
            {({ loading, error, data }) => {
                if(loading) return(<Text>loading</Text>)
                if(error) return (<Text> {error.message} </Text>)
                return (
                    <List>
                    {
                        data.parentPassengers && 
                        data.parentPassengers.length > 0 &&
                        data.parentPassengers.map((item)=>{
                            return (
                                item.passengers &&
                                item.passengers.length > 0 &&
                                item.passengers.map((subItem , index)=>(
                                   <Card style={{flex: 0}}>
                                    <CardItem>
                                    <Left>
                                        {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                                        <Body>
                                        <Text>{subItem.first_name} {subItem.surname}</Text>
                                        <Text note>Last updated: {momet().format('MMM DD, YYYY HH:mm')}</Text>
                                        </Body>
                                    </Left>
                                    </CardItem>
                                    <CardItem>
                                    <Body>
                                        {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                                        <MapView
                                            customMapStyle={{height:150}}
                                            initialRegion={{
                                            latitude: 37.78825,
                                            longitude: -122.4324,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                            }}
                                        />
                                    </Body>
                                    </CardItem>
                                    <CardItem>
                                    <Left>
                                        <Button transparent textStyle={{color: '#87838B'}}>
                                        <Icon name="logo-github" />
                                        <Text>1,926 stars</Text>
                                        </Button>
                                    </Left>
                                    </CardItem>
                                </Card>
                                ))
                            )
                        })
                    }
                    </List>
                )
            }}
            </Query>
        )
    }
}

export default Children