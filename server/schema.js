const { gql } = require('apollo-server-express');
const twitter = require('./libs/twitter')

exports.typeDefs = gql`
  type User {
    id: ID!
    name: String!
    screen_name: String!
    profile_image_url: String!
  }

  type Tweet {
    id: ID!
    id_str: String!
    created_at: String!
    text: String!
    retweet_count: Int!
    favorite_count: Int!
    user: User!
    retweeted_status: Tweet
  }

  type Query {
    tweets(count: Int): [Tweet]
    userTweets(userId: ID!): [Tweet]
    favorites(userId: ID): [Tweet]
  }

  type Mutation {
    addFavorite(tweetId: ID!): Tweet
  }
`;

exports.resolvers = {
  Query: {
    tweets() {
      return twitter.get('statuses/home_timeline', { count: 10 })
    },
    userTweets(_, { userId }) {
      return twitter.get('statuses/user_timeline', { count: 10, user_id: userId })
    },
    favorites() {
      return twitter.get('favorites/list', { count: 10 })
    }
  },
  Mutation: {
    addFavorite(_, { tweetId }) {
      return twitter.post('favorites/create', { id: tweetId })
    }
  }
};
