import http from "http";
import pool from "./db.js";

const hostname = "localhost";
const port = 5000;

function setHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

const server = http.createServer(async (req, res) => {
  setHeaders(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/foods" && req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM foods");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result.rows));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
  }

  else if (req.url === "/order" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => body += chunk.toString());
    req.on("end", async () => {
      try {
        const { customer_name, items, total_amount } = JSON.parse(body);
        await pool.query(
          "INSERT INTO orders (customer_name, items, total_amount) VALUES ($1, $2, $3)",
          [customer_name, JSON.stringify(items), total_amount]
        );
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Order placed successfully" }));
      } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  }

  else if (req.url === "/orders" && req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM orders ORDER BY id DESC");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result.rows));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
  }

  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
