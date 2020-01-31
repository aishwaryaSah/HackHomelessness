import React from 'react';
import './registerProperty.css';
import AddResident from './AddResident';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});
class HomelessRegister extends React.Component {
  constructor(props) {
    super(props);
  }

  submitFormHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="signup">
          <AddResident />
        </div>
      </ApolloProvider>
    );
  }
}
export default HomelessRegister;
