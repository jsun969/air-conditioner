import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../typings/socket';

export let socketClient: Socket<ServerToClientEvents, ClientToServerEvents>;
export const initSocketClient = async () => {
  if (typeof window === 'undefined') return;
  await fetch('/api/socket');
  socketClient = io();
};
