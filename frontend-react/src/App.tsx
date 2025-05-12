import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import GetUsers from './components/GetUsers';
import CreateUser from './components/CreateUser';
import './App.css';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:2010/mygraphql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />
        <hr />
        <GetUsers />
      </ApolloProvider>
    </>
  );
}

export default App;
