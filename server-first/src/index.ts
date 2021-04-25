import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';

interface Comment {
  id: number;
  text: string;
}

// DataSource
const comments: Comment[] = [
  {
    id: 1,
    text: 'first comment',
  },
  {
    id: 2,
    text: 'second comment',
  },
];

// use GraphQL
/*
const typeDefs = gql`
  type Comment {
    id: ID!
    text: String
  }
  type Query {
    hello: String
    comments: [Comment!]
  }
  type Mutation {
    addComment(text: String!): Comment!
  }
`;
*/
const typeDefs = gql(fs.readFileSync('schema.graphql', 'utf8'));
const resolvers = {
  Query: {
    hello: () => 'Hello, World! Hello, GraphQL!',
    comments: () => comments,
  },
  Mutation: {
    addComment: async (parent: any, args: any, context: any) => {
      const comment = {
        id: comments.length + 1,
        text: args.text,
      };
      comments.push(comment);
      return comment;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
