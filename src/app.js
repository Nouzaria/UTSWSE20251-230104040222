 // src/app.js
const express = require('express');
const app = express();

const PORT = 3000;

// Middleware untuk membaca JSON dari body request
app.use(express.json());

// Import rute untuk courses
const coursesRouter = require('./routes/courses.routes');

// Menggunakan rute dengan prefix /api
// Jadi endpoint akan menjadi /api/courses
app.use('/api/courses', coursesRouter);

// Endpoint /api/info (Sesuai Ketentuan 6)
app.get('/api/info', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API Identity",
    data: {
      apiName: "UTS Backend RESTful API",
      resource: "Courses",
      author: "[Isi dengan Nama Lengkapmu]", // GANTI DENGAN NAMAMU
      nim: "[Isi dengan NIM-mu]" // GANTI DENGAN NIM-MU
    }
  });
});

// Penanganan 404 untuk rute yang tidak ditemukan
app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Rute ${req.method} ${req.originalUrl} tidak ditemukan.`
  });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});