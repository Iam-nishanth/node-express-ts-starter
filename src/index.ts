import express from 'express';
import { authRouter } from './routers/Auth';

const app = express();

app.use(express.json());
app.use(authRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

export { app };

app.listen(8080, () => {
    console.log('Server started on http://localhost:8080');
});
