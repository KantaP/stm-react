import React from 'react';
import { Query } from 'react-apollo'
import * as gqlList from '../../apollo/gql'
import {Text} from 'native-base'
interface Props {}
interface State {}

class Myself extends React.Component<Props , State> {
    render() {
        return (<Query
            query={gqlList.myself}
        >
            {({ loading, error, data }) => {
                if(loading) return(<Text>loading</Text>)
                if(error) return (<Text> {error.message} </Text>)
                return (
                    <Text> {data.myself.email} </Text>
                )
            }}
        </Query> )        
    }
}

export default  Myself