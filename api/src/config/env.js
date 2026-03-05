import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 7500;

export const jwtSecret =
  process.env.JWT_SECRET || "default_secret";

export const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
