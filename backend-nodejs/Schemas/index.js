const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const UserType = require('./TypeDefs/UserDefs');
const userData = require('../MOCK_DATA.json');

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: null,
      resolve(parent, args) {
        return userData;
      },
    },

    getUserById: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        const { id } = args;
        const userFound = userData.find((user) => user.id === id);
        return userFound;
      },
    },

    getUserByFirstName: {
      type: UserType,
      args: { firstName: { type: GraphQLString } },
      resolve(parent, args) {
        const { firstName } = args;
        const userFound = userData.find((user) => user.firstName === firstName);
        return userFound;
      },
    },

    getUserByLastName: {
      type: UserType,
      args: { lastName: { type: GraphQLString } },
      resolve(parent, args) {
        const { lastName } = args;
        const userFound = userData.find((user) => user.lastName === lastName);
        return userFound;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ipAddress: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({ id: userData.length + 1, ...args });
        return userData[userData.length - 1];
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: Query, mutation: Mutation });
