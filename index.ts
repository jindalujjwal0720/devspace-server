/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import helmet from "helmet";

// initialize express
const app = express();

// setting up the environment variables
dotenv.config();

// allow cross origin requests (CORS) for all routes
app.use(cors());

// set security HTTP headers
app.use(helmet());

// parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to the database
import { connectDatabase } from "./utils/database";
connectDatabase();

// Identity Provider (IdP) service
app.use("/api", require("./identity-provider/app"));

// check if the PORT environment variable is set
if (!process.env.PORT) {
  process.exit(1);
}

// handle errors
import handleError from "./utils/errors";
app.use(handleError);

// start the server
const PORT: number = parseInt(process.env.PORT, 10);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
