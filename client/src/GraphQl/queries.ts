import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
      chatRooms {
        id
        type
        users {
          id
          username
        }
        messages {
          id
          content
          createdAt
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      username
      chatRooms {
        id
        type
        users {
          id
          username
        }
        messages {
          id
          content
          createdAt
          sender {
            id
          }
        }
      }
    }
  }
`;

export const GET_CHAT_ROOM = gql`
  query getChatRoom($id: ID!) {
    chatRoom(id: $id) {
      id
      type
      createdAt
      messages {
        id
        content
        createdAt
        sender {
          id
        }
      }
      users {
        id
        username
      }
    }
  }
`;

