export const typeDefs = ` #graphql
    type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    password: String!
    isVerfied: Boolean!
    imgURL: String
    createdAt: String!
    chatRooms: [ChatRoom]!
  }

    type Message {
        id: ID!
        sender: User!
        content: String!
        createdAt: String!
        chatRoom: ChatRoom!
    }

    type ChatRoom {
        id: ID!
        name: String
        type: String!
        users: [User]!
        createdAt: String!
        messages: [Message]
    }

    type Query {
        users: [User]
        user(id: ID!): User
        messages: [Message]
        message(id: ID!): Message
        chatRooms: [ChatRoom]
        chatRoom(id: ID!): ChatRoom
    }

    type Mutation {
        createChatRoom(name: String, type: String!, users: [ID]!): ChatRoom
        createMessage(senderId: ID!, content: String!, chatRoomId: ID!): Message
    }
`;
