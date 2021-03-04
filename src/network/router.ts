import {Express} from 'express';
import greet from '../components/greet/network';

const router = function(server: Express) {
  server.use('/greet', greet);
}

export default router