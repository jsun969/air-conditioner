import { nanoid } from 'nanoid';
import { Server } from 'socket.io';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '../../typings/socket';

const SocketHandler = (_: unknown, res: any) => {
  if (!res.socket.server.io) {
    const io = new Server<ClientToServerEvents, ServerToClientEvents>(
      res.socket.server,
    );
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('init-ac', (res) => {
        const id = nanoid();
        socket.join(id);
        res(id);
      });
      socket.on('init-rc', (id) => {
        socket.join(id);
        socket.to(id).emit('get-init-data');
      });
      socket.on('update', (id, data) => {
        socket.to(id).emit('update', data);
      });
    });
  }
  res.end();
};

export default SocketHandler;
