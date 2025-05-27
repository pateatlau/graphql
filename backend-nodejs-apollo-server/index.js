import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const PORT = 2011;

// Server setup
const server = new ApolloServer({
  // typedefs
  // resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`Apollo Server running at port ${PORT}`);
