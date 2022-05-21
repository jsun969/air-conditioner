import { ACData } from './ACData';

export interface ServerToClientEvents {
  update: (data: ACData) => void;
  'get-init-data': () => void;
}

export interface ClientToServerEvents {
  'init-ac': (res: (id: string) => void) => void;
  'init-rc': (id: string) => void;
  update: (id: string, data: ACData) => void;
}
