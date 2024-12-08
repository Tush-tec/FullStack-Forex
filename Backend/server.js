import express from "express";
import { exchangeRate } from "./exchangeRate.js";
import cors from "cors";

const app = express();
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));




app.get("/", (req, res) => {
  res.send(
    "Welcome on first page, Please move to: /api/currency-exchange-rate get for get exchage rate "
  );
});

app.get("/api/currency-exchange-rate", (req, res) => {
  res.json(exchangeRate);
});

app.listen(5050, (error) => {
  try {
    console.log("Server is running at Port:5050 ");
  } catch (error) {
    console.log(error);
  }
});
