import { Express } from 'express';
import greet from '../components/greet/network';
import notes from '../components/notes/network';

const router = function (server: Express) {
  server.use('/greet', greet);
  server.use('/notes', notes);
}

export default router