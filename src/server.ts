import express, {json} from 'express';
import router from './network/router';
import config from './config/config'

const app = express()

app.use(json())

router(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
