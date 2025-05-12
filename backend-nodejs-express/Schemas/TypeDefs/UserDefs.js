const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports = UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    ipAddress: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
