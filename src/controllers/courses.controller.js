 // src/controllers/courses.controller.js
let courses = require('../data/courses.data.js');

// Helper function untuk mencari ID selanjutnya
const getNextId = () => {
  return courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
}

// GET /api/courses
exports.getAllCourses = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Data mata kuliah berhasil diambil",
    data: courses
  });
};

// GET /api/courses/:id
exports.getCourseById = (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) {
    return res.status(404).json({
      status: "fail",
      message: "Data mata kuliah tidak ditemukan"
    });
  }

  res.status(200).json({
    status: "success",
    message: "Data mata kuliah berhasil diambil",
    data: course
  });
};

// POST /api/courses
exports.createCourse = (req, res) => {
  const { code, title, credits } = req.body;

  // Validasi (wajib ada code, title, credits)
  if (!code || !title || !credits) {
    return res.status(400).json({
      status: "fail",
      message: "Field 'code', 'title', dan 'credits' wajib diisi"
    });
  }
  
  // Cek jika credits adalah angka
  if (typeof credits !== 'number') {
     return res.status(400).json({
      status: "fail",
      message: "Field 'credits' harus berupa angka"
    });
  }

  const newCourse = {
    id: getNextId(),
    code,
    title,
    credits
  };

  courses.push(newCourse);

  res.status(201).json({
    status: "success",
    message: "Data mata kuliah berhasil dibuat",
    data: newCourse
  });
};

// PUT /api/courses/:id
exports.updateCourse = (req, res) => {
  const id = parseInt(req.params.id);
  const { code, title, credits } = req.body;
  const index = courses.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Data mata kuliah tidak ditemukan"
    });
  }

  // Validasi (wajib ada code, title, credits)
  if (!code || !title || !credits) {
    return res.status(400).json({
      status: "fail",
      message: "Field 'code', 'title', dan 'credits' wajib diisi"
    });
  }
  
  // Cek jika credits adalah angka
  if (typeof credits !== 'number') {
     return res.status(400).json({
      status: "fail",
      message: "Field 'credits' harus berupa angka"
    });
  }

  const updatedCourse = {
    id: id,
    code,
    title,
    credits
  };

  courses[index] = updatedCourse;

  res.status(200).json({
    status: "success",
    message: "Data mata kuliah berhasil diupdate",
    data: updatedCourse
  });
};

// DELETE /api/courses/:id
exports.deleteCourse = (req, res) => {
  const id = parseInt(req.params.id);
  const index = courses.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Data mata kuliah tidak ditemukan"
    });
  }

  // Hapus data dari array
  courses.splice(index, 1);

  // Sesuai spesifikasi, DELETE mengembalikan 204 No Content
  res.status(204).send();
};