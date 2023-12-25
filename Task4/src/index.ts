import * as express from 'express';
import  * as bodyParser from "body-parser";

import router from './routes/product.routes';

const app = express();

app.use(bodyParser.json());
app.use('/api', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
