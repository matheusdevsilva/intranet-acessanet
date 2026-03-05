import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "123456",
  database: "acessanet_intranet_system",
});

export default pool
