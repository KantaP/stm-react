import gql from "graphql-tag";

export const getParentPassenger = gql`
  query parentPassengers($date: String! , $time: String! , $timezone: String!) {
    parentPassengers(date: $date , time: $time , timezone: $timezone){
      school_name
      passengers {
        passenger_id
        first_name
        surname
        routeToday {
          j_id
          collection_address {
            time_start
            progress
            address
            latlng
            passenger_log {
              log_type_code
              route_type
              date_time_scan
              address {
                collection
                destination
              }
            }
          }
          destination_address {
            time_end
            progress
            address
            latlng
            passenger_log {
              log_type_code
              route_type
              date_time_scan
              address {
                collection
                destination
              }
            }
          }
          peroid
          date_today
          extra_address {
            movement_order
            latlng
          }
          tracking {
            lat
            lng
            timestamp
            j_id
          }
        }
      }
    }
  }
`;

export const myself = gql`
  query myselfQuery {
    myself {
      parent_id ,
      email
    }
  }
`

export const contactOptions = gql`
  query parentContactOptions {
    parentContactOptions {
      accept_email
      accept_notification
    }
  }
`

export const updateContactOption = gql`
  mutation parentUpdateContactOption($input: UpdateParentContactOptionInput!) {
    parentUpdateContactOption(input: $input) {
      msg
      status
    }
  }
`

