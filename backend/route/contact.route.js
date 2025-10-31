import express from "express";
import { contactForm } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/send", contactForm);

export default router;
