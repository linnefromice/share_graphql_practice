export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft: Post;
  publish?: Maybe<Post>;
};

export type MutationCreateDraftArgs = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type MutationPublishArgs = {
  draftId: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  drafts: Array<Maybe<Post>>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type GetAllQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllQuery = { __typename?: 'Query' } & {
  posts?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Post' } & Pick<
          Post,
          'id' | 'title' | 'body' | 'published'
        >
      >
    >
  >;
  drafts: Array<
    Maybe<
      { __typename?: 'Post' } & Pick<
        Post,
        'id' | 'title' | 'body' | 'published'
      >
    >
  >;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPostsQuery = { __typename?: 'Query' } & {
  posts?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Post' } & Pick<
          Post,
          'id' | 'title' | 'body' | 'published'
        >
      >
    >
  >;
};

export type GetDraftsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDraftsQuery = { __typename?: 'Query' } & {
  posts?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Post' } & Pick<
          Post,
          'id' | 'title' | 'body' | 'published'
        >
      >
    >
  >;
};
