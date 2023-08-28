/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

const express = require("express");
const router = express.Router();

router.use("/idp", require("./routes/index"));

module.exports = router;
