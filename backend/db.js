import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",     
  host: "localhost",
  database: "food_delivery",
  password: "postgres",
  port: 5432,
});

export default pool;
