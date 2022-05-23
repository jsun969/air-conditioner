import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../typings/socket';

if (typeof window !== 'undefined') {
  fetch('/api/socket');
}
export const socketClient: Socket<ServerToClientEvents, ClientToServerEvents> =
  io();
