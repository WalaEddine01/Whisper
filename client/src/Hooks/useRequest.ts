import { CREATE_CHAT_ROOM, CREATE_MESSAGE } from '../GraphQl/mutations';
import { GET_CHAT_ROOM, GET_CURRENT_USER, GET_USERS } from '../GraphQl/queries';
import { useLazyQuery, useMutation } from '@apollo/client';

const useRequest = () => {
  const [getUser] = useLazyQuery(GET_CURRENT_USER, {
    fetchPolicy: 'no-cache',
  });

  const [getUsers] = useLazyQuery(GET_USERS, {
    fetchPolicy: 'no-cache',
  });

  const [getSelectedRoom] = useLazyQuery(GET_CHAT_ROOM, {
    fetchPolicy: 'no-cache',
  });

  const [createRoom] = useMutation(CREATE_CHAT_ROOM);
  const [createMessage] = useMutation(CREATE_MESSAGE);

  return { getUser, getUsers, getSelectedRoom, createRoom, createMessage };
};

export default useRequest;

