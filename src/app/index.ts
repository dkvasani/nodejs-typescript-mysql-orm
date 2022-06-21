import express from "express";
import * as dotenv from "dotenv";

import { route } from "./routes";
import { generateToken } from './utils/jwt';


dotenv.config();


const app = express();
app.use(express.json());

// Only generate a token for lower level environments
if (process.env.NODE_ENV !== 'production') {
  //console.log('JWT', generateToken());
}
const { PORT } = process.env;
route(app);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});