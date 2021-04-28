import { GraphQLServer } from "graphql-yoga";
const glue = require('schemaglue');


const { schema, resolver } = glue('src/graphql')

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers: resolver,
});


server.start(() => {
  console.log("server is up!");
});