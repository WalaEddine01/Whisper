import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';
const socket = io(SOCKET_URL);


socket.on("connect", () => {
    console.log('Connected to server with ID: ' + socket.id);
})

socket.on("disconnect", () => {
    console.log('Disconnected from server' + socket.id);
})

export default socket;
