import React from 'react';
import './registerProperty.css';
import AddHome from './AddHome';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import HomeList from './HomeList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

class PropertyRegister extends React.Component {
  constructor(props) {
    super(props);
  }

  displayHomes() {
    var data = this.props.getHomesQuery;
    if (data.loading) {
      return <option disabled>loading Homes...</option>;
    } else {
      return data.homes.map(home => {
        return (
          <option key={home.id} value={home.id}>
            {home.name}
          </option>
        );
      });
    }
  }

  submitFormHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="signup">
          <AddHome />
          <h2>
            {' '}
            <u>All our shelter homes: </u>
          </h2>
          <HomeList />
        </div>
      </ApolloProvider>
    );
  }
}
export default PropertyRegister;
