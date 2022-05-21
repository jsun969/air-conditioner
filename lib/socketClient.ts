import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../typings/socket';

let socketClient: Socket<ServerToClientEvents, ClientToServerEvents> = io();

(async () => {
  if (typeof window === 'undefined') return;
  await fetch('/api/socket');
  socketClient = io();
})();

export { socketClient };
