import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Data dummy awal
let rampData = [
  { date: '2025-08-01', operator: 'Garuda', source: 'Authority' },
  { date: '2025-08-01', operator: 'Citilink', source: 'Internal' },
];

// GET semua data
app.get('/api/rampchecks', (req, res) => {
  res.json(rampData);
});

// POST tambah data
app.post('/api/rampchecks', (req, res) => {
  const body = req.body || {};
  // validasi sederhana
  if (!body.date || !body.operator || !body.source) {
    return res.status(400).json({ message: 'date, operator, source wajib diisi' });
  }
  rampData.push(body);
  res.json({ message: 'Data ditambahkan', data: body });
});

// Port WAJIB dari environment (Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});
