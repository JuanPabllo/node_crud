import 'reflect-metadata';
import Express from 'express';
import './database';
import { router } from './routes';

const PORT = 3000;
const app = Express();

app.use(Express.json());

app.use(router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
