
# 🎯 UTS Web Service — RESTful API (Courses)

---

## 👨‍💻 Author

Dikerjakan sebagai bagian dari Ujian Tengah Semester (UTS) Mata Kuliah Web Service.

* **Nama:** Achmad Fauzil 'Adhim
* **NIM:** 230104040222

**Topik:** Implementasi CRUD RESTful (7 RESTful Principles) untuk resource Courses  
**Mata Kuliah:** Web Service

-----

## Tujuan

Berdasarkan deskripsi tugas, tujuan dari proyek ini adalah:

1.  Mendesain endpoint RESTful untuk resource baru (Courses).
2.  Mengimplementasikan CRUD lengkap dengan Express.js.
3.  Menggunakan metode HTTP dan status code sesuai standar REST.
4.  Menerapkan validasi input dan error handling yang tepat.
5.  Menghasilkan representasi data JSON yang konsisten.
6.  Menyusun struktur folder modular dan mudah dibaca.
7.  Menerapkan 7 RESTful Principles secara eksplisit.

-----

## ⚙️ Tools yang Digunakan

  * Node.js
  * Express.js
  * VS Code
  * Postman (untuk pengujian API)

-----

## 🧱 Struktur Folder Proyek

Struktur folder yang digunakan sesuai dengan ketentuan tugas:

```
uts-backend/
├─ package.json
├─ README.md
└─ src/
   ├─ app.js             (File server utama)
   ├─ routes/
   │  └─ courses.routes.js  (Definisi endpoint)
   ├─ controllers/
   │  └─ courses.controller.js (Logika bisnis)
   └─ data/
      └─ courses.data.js     (Data dummy)
```

-----

## 🧮 7 RESTful Principles yang Diterapkan

Tabel ini merangkum 7 Prinsip RESTful yang diimplementasikan dalam proyek ini:

| No | Prinsip | Implementasi di Proyek |
| :--- | :--- | :--- |
| 1 | **Resource-Oriented URI** | Menggunakan kata benda jamak: `/api/courses`. |
| 2 | **Proper HTTP Methods** | Menggunakan `GET`, `POST`, `PUT`, `DELETE` sesuai fungsinya. |
| 3 | **Stateless Communication** | Server tidak menyimpan *state* atau *session* klien. |
| 4 | **Consistent Status Codes** | Menggunakan `200`, `201`, `204`, `400`, `404` sesuai kondisi. |
| 5 | **JSON Representation** | Semua respons dari API dikembalikan dalam format JSON. |
| 6 | **Validation & Error Handling** | Melakukan validasi input (field wajib) dan mengembalikan pesan error 400. |
| 7 | **Discoverability** | Menyediakan endpoint `/api/info` untuk identitas API. |

-----

## 🧰 Daftar Endpoint API

API ini berjalan di `http://localhost:3000`.

| Method | Endpoint | Deskripsi | Status Sukses | Status Error |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/courses` | Mengambil semua data mata kuliah. | `200 OK` | - |
| `GET` | `/api/courses/:id` | Mengambil data mata kuliah berdasarkan ID. | `200 OK` | `404 Not Found` |
| `POST` | `/api/courses` | Menambahkan data mata kuliah baru. | `201 Created` | `400 Bad Request` |
| `PUT` | `/api/courses/:id` | Memperbarui data mata kuliah berdasarkan ID. | `200 OK` | `400 Bad Request` / `404 Not Found` |
| `DELETE` | `/api/courses/:id` | Menghapus data mata kuliah berdasarkan ID. | `204 No Content` | `404 Not Found` |
| `GET` | `/api/info` | Menampilkan informasi dan identitas API. | `200 OK` | - |

-----

### Contoh Request Body (JSON)

Gunakan format ini saat melakukan `POST` atau `PUT` ke endpoint `/api/courses`.

**Field Wajib:** `code`, `title`, `credits`

```json
{
    "code": "IF305",
    "title": "Web Service",
    "credits": 3
}
```

-----

## 🚀 Cara Menjalankan Proyek

1.  Buka terminal di dalam folder proyek ini.
2.  Install semua *dependency* yang dibutuhkan:
    ```bash
    npm install
    ```
3.  Jalankan server menggunakan skrip `dev`:
    ```bash
    npm run dev
    ```
4.  Server akan berjalan di alamat `http://localhost:3000`.
5.  Buka Postman untuk melakukan pengujian pada semua *endpoint* yang tersedia.