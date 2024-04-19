// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import PrivacyWebhookHandlers from "./privacy.js";
import dotenv from "dotenv";
dotenv.config();

console.log("env BACKEND  PORT= ", process.env.BACKEND_PORT);
console.log("DEFAULT PORT", process.env.PORT);
const PORT = parseInt(
  process.env.BACKEND_PORT || process.env.PORT || "3000",
  10
);

// const PORT = 6060;

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;
console.log("STATIC PATH = ", STATIC_PATH);
const app = express();

app.listen(PORT, () => {
  console.log(`BACKEND APP LISTENING ON PORT ${PORT}`);
});
