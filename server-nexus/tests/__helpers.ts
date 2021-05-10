// tests/__helpers.ts                                            // 1
import { ServerInfo } from 'apollo-server';
import getPort, { makeRange } from 'get-port';
import { GraphQLClient } from 'graphql-request';
import { server } from '../src/api/server';
type TestContext = {
  client: GraphQLClient;
};
export function createTestContext(): TestContext {
  let ctx = {} as TestContext;
  const graphqlCtx = graphqlTestContext();
  beforeEach(async () => {
    // 2
    const client = await graphqlCtx.before();
    Object.assign(ctx, {
      client,
    });
  });
  afterEach(async () => {
    // 3
    await graphqlCtx.after();
  });
  return ctx; // 8
}
function graphqlTestContext() {
  let serverInstance: ServerInfo | null = null;
  return {
    async before() {
      const port = await getPort({ port: makeRange(4000, 6000) }); // 4
      serverInstance = await server.listen({ port }); // 5
      return new GraphQLClient(`http://localhost:${port}`); // 6
    },
    async after() {
      serverInstance?.server.close(); // 7
    },
  };
}
