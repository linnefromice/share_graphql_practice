import { objectType, extendType, stringArg, nonNull, intArg } from 'nexus';

export const Post = objectType({
  name: 'Post', // <- Name of your type
  definition(t) {
    t.nonNull.int('id'); // <- Field named `id` of type `Int`
    t.string('title'); // <- Field named `title` of type `String`
    t.string('body'); // <- Field named `body` of type `String`
    t.boolean('published'); // <- Field named `published` of type `Boolean`
  },
});

export const PostQuery = extendType({
  type: 'Query', // 2
  definition(t) {
    t.nonNull.list.field('drafts', {
      // 3, 4, 5
      type: 'Post', // 6, 7
      resolve(_root, _args, ctx) {
        return ctx.db.posts.filter((p) => p.published === false);
      },
    }),
      t.list.field('posts', {
        type: 'Post',
        resolve(_root, _args, ctx) {
          return ctx.db.posts.filter((p) => p.published === true);
        },
      });
  },
});

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createDraft', {
      type: 'Post',
      args: {
        title: nonNull(stringArg()),
        body: nonNull(stringArg()),
      },
      resolve(_root, args, ctx) {
        const draft = {
          id: ctx.db.posts.length + 1,
          title: args.title,
          body: args.body,
          published: false,
        };
        ctx.db.posts.push(draft);
        return draft;
      },
    });
    t.field('publish', {
      type: 'Post',
      args: {
        draftId: nonNull(intArg()),
      },
      resolve(_root, args, ctx) {
        const draftToPublish = ctx.db.posts.find((p) => p.id == args.draftId);

        if (!draftToPublish) {
          throw new Error('Could not find draft with id ' + args.draftId);
        }

        draftToPublish.published = true;

        return draftToPublish;
      },
    });
  },
});
