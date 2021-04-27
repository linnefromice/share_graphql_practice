import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';

type ID = string;
enum TodoStatus {
  done,
  pending,
}

interface Comment {
  todoid: ID;
  commentid: string;
  content?: string;
}
interface Todo {
  id: ID;
  name?: string;
  description?: string;
  priority?: number;
  status?: TodoStatus;
  comments?: Comment[];
}
interface TodoConnection {
  todos: Todo[];
  nextToken: string;
}

// DataSource
const comments: Comment[] = [
  {
    todoid: '1',
    commentid: '1',
    content: 'content 1',
  },
  {
    todoid: '2',
    commentid: '2',
    content: 'content 2',
  },
  {
    todoid: '3',
    commentid: '3',
    content: 'content 3',
  },
];
const todos: Todo[] = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },
];

const typeDefs = gql(fs.readFileSync('schema.graphql', 'utf8'));
const resolvers = {
  Query: {
    getTodos: (parent: any, args: any, context: any) => {
      const { limit, nextToken } = args;
      const index = todos.findIndex((todo) => todo.id === nextToken);
      const result = todos.slice(index, index + limit);

      return {
        todos: result,
        nextToken: todos[index + limit]?.id,
      };
    },
  },
  Mutation: {
    addTodo: async (parent: any, args: any, context: any) => {
      const todo: Todo = {
        id: String(todos.length + 1),
      };
      todos.push(todo);
      return todo;
    },
    addComment: async (parent: any, args: any, context: any) => {
      const comment: Comment = {
        todoid: String(comments.length + 1),
        commentid: '',
        content: args.text,
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
