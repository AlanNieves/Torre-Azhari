const express = require("express");
const { validateBody } = require("../../middlewares/validateBody");
const leadRateLimit = require("../../middlewares/rateLimit");
const { LeadCreateSchema } = require("./lead.schema");
const { registerLead } = require("./lead.controller");

const router = express.Router();

router.post(
  "/",
  leadRateLimit,
  validateBody(LeadCreateSchema),
  registerLead
);

module.exports = router;
