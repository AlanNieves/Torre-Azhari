const express = require("express");
const { validateBody } = require("../../middlewares/validateBody");
const { LeadCreateSchema } = require("./lead.schema");
const { registerLead } = require("./lead.controller");

const router = express.Router();



router.post("/", validateBody(LeadCreateSchema), registerLead);

module.exports = router;
