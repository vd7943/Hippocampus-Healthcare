import express from "express";
import { enquiry } from "../controller/enquiry.controller.js";

const router = express.Router();

router.post("/send", enquiry);

export default router;
