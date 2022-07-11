const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type GetResponse {
    login: String
    html_url: Url
    name: String
    site_admin: Boolean
    location: String
  }

  scalar Url

  type Query {
    getResponse(login: String!): GetResponse

    getAll: [GetResponse]
  }
`;
