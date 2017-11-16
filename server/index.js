import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.route';
import cors from 'cors';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/api/v1', routes);

app.listen(3000, () => {
    console.log("All right ! I am alive at Port 3000.");
});

export default app;