import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import fs from "fs";
import crypto from "crypto";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
const API_KEY = "";

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/test", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Server on port ${port}`);
});
