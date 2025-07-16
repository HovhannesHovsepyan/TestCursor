import express from 'express';
import type { Request, Response } from 'express';
import { Pool } from 'pg';

const app = express();
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running!');
});

app.get('/healthz', (req: Request, res: Response) => res.json({ status: 'ok' }));

app.get('/users', async (req: Request, res: Response) => {
  const { rows } = await pool.query('SELECT * FROM users');
  res.json(rows);
});

app.post('/users', async (req: Request, res: Response) => {
  const { name } = req.body;
  const { rows } = await pool.query('INSERT INTO users(name) VALUES($1) RETURNING *', [name]);
  res.json(rows[0]);
});

app.listen(3000, () => console.log('Backend running on port 3000')); 