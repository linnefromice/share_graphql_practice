import { VFC } from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';
import { getPosts } from './__generated__/types';

const GET_ALL = gql`
  query GetAll {
    posts {
      id
      title
      body
      published
    }
    drafts {
      id
      title
      body
      published
    }
  }
`;

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      published
    }
  }
`;

const GET_DRAFTS = gql`
  query GetDrafts {
    posts {
      id
      title
      body
      published
    }
  }
`;

/* eslint-disable */
const App: VFC = () => {
  const { loading, error, data } = useQuery<getPosts>(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>POSTS</h1>
      {data!.posts!.map((post) => {
        if (!post) {
          return null;
        }
        const { id, title, body, published } = post;
        return (
          <div key={id}>
            <p>{`${id} ${title} ${body} ${published}`}</p>
          </div>
        );
      })}
      <h1>DRAFTS</h1>
      {data!.drafts!.map((draft) => {
        if (!draft) return;
        const { id, title, body, published } = draft;
        return (
          <div key={id}>
            <p>{`${id} ${title} ${body} ${published}`}</p>
          </div>
        );
      })}
    </div>
  );
};
/* eslint-enable */

export default App;
