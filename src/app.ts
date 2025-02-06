import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { ErrorResponse, NumberResponse } from "./@types";
import { NumberUtils } from "./utils/utils";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8003;

app.use(cors());

app.get("/", (_req: express.Request, res: express.Response) => {
  res.json({ status: "API is running" });
});

// Main endpoint with fixed types
app.get("/api/classify-number", async (req: any, res: any) => {
  try {
    const numberParam = req.query.number;

    if (!numberParam || isNaN(Number(numberParam))) {
      return res.status(400).json({
        number: numberParam || "undefined",
        error: true,
      } as ErrorResponse);
    }

    const number = parseInt(numberParam);

    const funFactResponse = await axios.get(
      `http://numbersapi.com/${number}/math`
    );
    const funFact: string = funFactResponse.data;
    const response: NumberResponse = {
      number,
      is_prime: NumberUtils.isPrime(number),
      is_perfect: NumberUtils.isPerfect(number),
      properties: NumberUtils.getProperties(number),
      digit_sum: NumberUtils.getDigitSum(number),
      fun_fact: funFact,
    };

    res.json(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      number: req.query.number || "undefined",
      error: true,
      message: "Internal server error",
    } as ErrorResponse);
  }
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
