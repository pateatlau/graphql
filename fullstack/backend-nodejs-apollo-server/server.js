import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const PORT = 2012;

const typeDefs = `
  type Query {}
`;

const resolvers = {};

// Server setup
const server = new ApolloServer({
  // typedefs
  typeDefs,
  // resolvers
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`Apollo Server running at port ${PORT}`);
