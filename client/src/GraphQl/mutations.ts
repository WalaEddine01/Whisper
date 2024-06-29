import { gql } from '@apollo/client';

export const CREATE_CHAT_ROOM = gql`
  mutation createChatRoom($type: String!, $userIds: [ID!]!) {
    createChatRoom(type: $type, userIds: $userIds) {
      id
      type
      users {
        id
        username
      }
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation createMessage($senderId: ID!, $content: String!, $chatRoomId: ID!) {
    createMessage(
      senderId: $senderId
      content: $content
      chatRoomId: $chatRoomId
    ) {
      id
      sender {
        id
        username
      }
      content
      chatRoom {
        id
      }
    }
  }
`;

