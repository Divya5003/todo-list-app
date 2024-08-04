import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, timestamp } = req.body;

    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    const newEntry = { id: data.length + 1, title, description, timestamp, isDone: false };
    data.push(newEntry);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(201).json(newEntry);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
