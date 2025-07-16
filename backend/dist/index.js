"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pool = new pg_1.Pool({ connectionString: process.env.DATABASE_URL });
app.get('/healthz', (req, res) => res.json({ status: 'ok' }));
app.get('/users', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
});
app.post('/users', async (req, res) => {
    const { name } = req.body;
    const { rows } = await pool.query('INSERT INTO users(name) VALUES($1) RETURNING *', [name]);
    res.json(rows[0]);
});
app.listen(3000, () => console.log('Backend running on port 3000'));
