import React from 'react';
import { Query } from 'react-apollo'
import * as gqlList from '../../apollo/gql'
import {Text , List , Card , CardItem , Left , Body , Right ,Thumbnail , Button , Icon , View , Spinner } from 'native-base'
import moment from 'moment'
import { Dimensions } from 'react-native'
import { MapView , Location , Permissions } from "expo";
import { Viewport } from '@skele/components'
interface Props {}
interface State {
    location: any;
    locationResult: string;
}
const styles = {
    map: {  
        width:(width * 80) /100,
        height:250,
         backgroundColor: 'darkgray',
        flex:1 
    }
}
const { width } = Dimensions.get("window")
const Placeholder = () => <View style={styles.map} />
const ViewportAwareMap = Viewport.Aware(Viewport.WithPlaceholder(MapView, Placeholder))
class Children extends React.Component<Props , State> {
    state = {
        location: {coords: { latitude: 37.78825, longitude: -122.4324}},
        locationResult: ""
    }
    async componentDidMount() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
                location,
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location), location, });
    }
    checkRouteLog(routeLog: Array<any>, route_type: number) {
        if(routeLog.length > 0) {
        var log = routeLog.filter((route)=>(route.route_type == route_type && route['date_time_scan'] != null));
        if(log.length == 0) return false;
        return true;
        }
        return false;
    }
    render() {
        
        const variables = {date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm'), timezone: moment().format('Z')}
        return(
            <Query
                query={gqlList.getParentPassenger}
                variables={variables}
            >
            {({ loading, error, data }) => {
                if(loading) return(<Spinner />)
                if(error) return (<Text> {error.message} </Text>)
                return (
                    <Viewport.Tracker>
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
                                        { subItem.photo !== "" && subItem.photo.includes('http') && (<Thumbnail source={{uri: subItem.photo}} width={80} />)}
                                        <Body>
                                            <Text>{subItem.first_name} {subItem.surname}</Text>
                                            <Text note>Last updated: {moment().format('MMM DD, YYYY HH:mm')}</Text>
                                        </Body>
                                    </Left>
                                    </CardItem>
                                    <CardItem>
                                    <Body>
                                        <ViewportAwareMap
                                            style={{
                                                flex: 1,
                                                width:(width * 80) /100,
                                                height:250
                                            }}
                                            region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                                        >
                                            {
                                                subItem.routeToday.length > 0 &&
                                                    (subItem.routeToday.some((el)=>el.peroid === 'current')) 
                                                    ?   subItem.routeToday.filter((el)=>el.peroid === 'current').length > 0 &&
                                                        subItem.routeToday.filter((el)=>el.peroid === 'current').map((item,index)=>{
                                                            const coords = {
                                                                latitude: (this.checkRouteLog(item.destination_address.passenger_log , 0)) 
                                                                            ? parseFloat(item.destination_address.latlng.split(',')[0])
                                                                            : parseFloat(item.collection_address.latlng.split(',')[0]),
                                                                longitude: (this.checkRouteLog(item.destination_address.passenger_log , 0)) 
                                                                            ? parseFloat(item.destination_address.latlng.split(',')[1])
                                                                            : parseFloat(item.collection_address.latlng.split(',')[1]),
                                                            };
                                                            return(
                                                            <MapView.Marker 
                                                                key={index}
                                                                coordinate={coords}
                                                            />) 
                                                        })
                                                    :   subItem.routeToday.filter((el)=>el.peroid === 'previous').length > 0 &&
                                                        subItem.routeToday.filter((el)=>el.peroid === 'previous').map((item,index)=>{
                                                            const coords = {
                                                                latitude: (this.checkRouteLog(item.destination_address.passenger_log , 0)) 
                                                                            ? parseFloat(item.destination_address.latlng.split(',')[0])
                                                                            : parseFloat(item.collection_address.latlng.split(',')[0]),
                                                                longitude: (this.checkRouteLog(item.destination_address.passenger_log , 0)) 
                                                                            ? parseFloat(item.destination_address.latlng.split(',')[1])
                                                                            : parseFloat(item.collection_address.latlng.split(',')[1]),
                                                            };
                                                            return(
                                                            <MapView.Marker 
                                                                key={index}
                                                                coordinate={coords}
                                                            />) 
                                                        })
                                                
                                            }
                                        </ViewportAwareMap>
                                    </Body>
                                    </CardItem>
                                    <CardItem>
                                    <Left>
                                        <Button transparent textStyle={{color: '#87838B'}}>
                                            <Icon name="eye" />
                                            <Text>View more</Text>
                                        </Button>
                                    </Left>
                                    </CardItem>
                                </Card>
                                ))
                            )
                        })
                    }
                        </List>
                    </Viewport.Tracker>
                )
            }}
            </Query>
        )
    }
}

export default Children