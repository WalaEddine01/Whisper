import { Socket, io } from 'socket.io-client';

import { DefaultEventsMap } from '@socket.io/component-emitter';

const SOCKET_URL = 'http://localhost:5000';
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const initializeSocket = (userId: string) => {
  socket = io(SOCKET_URL, {
    query: { userId },
  });

  // socket.on('connect', () => {
  //   console.log(
  //     `Connected to server with user ID: ${userId} and socketId: ${socket.id}`,
  //   );
  // });

  // socket.on('disconnect', () => {
  //   console.log('Disconnected from server with user ID:', userId);
  // });

  return socket;
};

export { socket, initializeSocket };

