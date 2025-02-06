import axios from "axios";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

function checkPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function checkPerfect(n: number): boolean {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      const other = n / i;
      if (other !== i) sum += other;
    }
  }
  return sum === n;
}

function checkArmstrong(n: number): boolean {
  if (n < 0) return false;
  const numStr = String(n);
  const length = numStr.length;
  const sum = numStr
    .split("")
    .reduce((acc, digit) => acc + Math.pow(parseInt(digit, 10), length), 0);
  return sum === n;
}

function sumDigits(n: number): number {
  let num = Math.abs(n);
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

app.get("/api/classify-number", async (req: Request, res: Response) => {
  console.log("We are here...");
  const numStr = req.query.number as string;

  if (typeof numStr !== "string" || !/^-?\d+$/.test(numStr)) {
    return res.status(400).json({ number: numStr, error: true });
  }

  const number = parseInt(numStr, 10);

  const isPrime = checkPrime(number);
  const isPerfect = checkPerfect(number);
  const isArmstrong = checkArmstrong(number);
  const parity = number % 2 === 0 ? "even" : "odd";
  const digitSum = sumDigits(number);
  let funFact = "No fun fact available.";

  try {
    const response = await axios.get(
      `http://numbersapi.com/${number}/math?json`,
      { timeout: 400 }
    );
    funFact = response.data.text || "No fun fact available.";
  } catch (error) {
    console.error(
      "Error fetching fun fact:",
      error instanceof Error ? error.message : "Unknown error"
    );
  }

  const properties: string[] = [];
  if (isArmstrong) properties.push("armstrong");
  properties.push(parity);

  res.json({
    number,
    is_prime: isPrime,
    is_perfect: isPerfect,
    properties,
    digit_sum: digitSum,
    fun_fact: funFact,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
