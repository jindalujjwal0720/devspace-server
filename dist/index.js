"use strict";
/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
// setting up the environment variables
dotenv.config();
// allow cross origin requests (CORS) for all routes
app.use(cors());
// parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connect to the database
const database_1 = require("./utils/database");
(0, database_1.connectDatabase)();
// Identity Provider (IdP) service
app.use("/api", require("./identity-provider/app"));
// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//# sourceMappingURL=index.js.map