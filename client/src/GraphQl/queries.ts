import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      imgPath
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
      name
      imgPath
      chatRooms {
        id
        type
        name
        users {
          id
          username
          name
          imgPath
        }
        messages {
          id
          content
          createdAt
          sender {
            id
            name
            username
            imgPath
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
          name
          username
          imgPath
        }
      }
      users {
        id
        username
        imgPath
        name
      }
    }
  }
`;

