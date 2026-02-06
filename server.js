const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// SỬA ĐƯỜNG DẪN: Trỏ đúng vào file data.js trong thư mục utils
const categories = require('./utils/data'); 

app.get('/api/v1/categories', (req, res) => {
    res.json(categories);
});

// Thêm route lấy chi tiết theo ID nếu cần
app.get('/api/v1/categories/:id', (req, res) => {
    const item = categories.find(c => c.id == req.params.id);
    item ? res.json(item) : res.status(404).json({ message: "Không tìm thấy" });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});