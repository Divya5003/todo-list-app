import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'PUT') {
        const { id, title, description, timestamp, isDone } = req.body;

        const filePath = path.join(process.cwd(), 'data.json');
        const jsonData = fs.readFileSync(filePath);
        const data = JSON.parse(jsonData);

        const entryIndex = data.findIndex((entry) => entry.id === id);

        if (entryIndex !== -1) {
            data[entryIndex] = { id, title, description, timestamp, isDone };
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            res.status(200).json(data[entryIndex]);
        }
        else {
            res.status(404).json({ message: 'Not Found' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
