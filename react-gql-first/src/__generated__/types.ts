/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAll
// ====================================================

export interface GetAll_posts {
  __typename: 'Post';
  id: number;
  title: string | null;
  body: string | null;
  published: boolean | null;
}

export interface GetAll_drafts {
  __typename: 'Post';
  id: number;
  title: string | null;
  body: string | null;
  published: boolean | null;
}

export interface GetAll {
  posts: (GetAll_posts | null)[] | null;
  drafts: (GetAll_drafts | null)[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_posts {
  __typename: 'Post';
  id: number;
  title: string | null;
  body: string | null;
  published: boolean | null;
}

export interface GetPosts {
  posts: (GetPosts_posts | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDrafts
// ====================================================

export interface GetDrafts_posts {
  __typename: 'Post';
  id: number;
  title: string | null;
  body: string | null;
  published: boolean | null;
}

export interface GetDrafts {
  posts: (GetDrafts_posts | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
