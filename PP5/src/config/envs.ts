import 'dotenv/config';
import { get } from 'env-var';
import env from 'env-var';

export const envs = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://practica_owner:5zABDyVfTdS9@ep-long-math-a5g3n3o9.us-east-2.aws.neon.tech/practica?sslmode=require',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://practica_owner:5zABDyVfTdS9@ep-long-math-a5g3n3o9.us-east-2.aws.neon.tech/practica?sslmode=require',
};