
export const typeDefs = ` #graphql
    type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    isVerified: Boolean!
    createdAt: String!
  }
    type Query {
        users: [User]
        user(id: ID!): User
    }

`;
