const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./Schemas');

const PORT = 2010;
const app = express();

// GraphQL Schema

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'GraphQL server' });
});

// CREATE GraphQL Server
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(
  '/mygraphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
