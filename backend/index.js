import { config } from "dotenv";
import express from "express";
import cors from "cors";
import session from "express-session";
import bodyParser from "body-parser";
import contactRoute from "./route/contact.route.js";
import enquiryRoute from "./route/enquiry.route.js";

const app = express();
config();

const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "yourSecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/contact", contactRoute);
app.use("/enquiry", enquiryRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
